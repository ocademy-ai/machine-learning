var { Amplify } = require('aws-amplify');
var { API } = require('aws-amplify');
var { Auth } = require('aws-amplify');
const knex = require('knex');
const knexConfig = require('./knexfile');
const { createCourse } = require('./graphql/mutations.ts');
const { updateCourse } = require('./graphql/mutations.ts');
const { deleteCourse } = require('./graphql/mutations.ts');
const { getCourse } = require('./graphql/queries.ts');
const { listCourses } = require('./graphql/queries.ts');
const fs = require('fs');
const path = require('path');

let amplifyConfig;
const configFilePath = path.join(__dirname, './.config.development.json');
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const fieldsToCheck = [
    'title', 'source', 'description', 'cover', 'objectives',
    'syllabus', 'price', 'cost', 'topic', 'duration',
    'type', 'hasCert', 'language', 'level', 'license', 'published_at'
];

if (fs.existsSync(configFilePath)) {
    amplifyConfig = require(configFilePath);
} else {
    amplifyConfig = {
        aws_project_region: process.env.AWS_PROJECT_REGION,
        aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
        aws_appsync_region: process.env.AWS_APPSYNC_REGION,
        aws_appsync_authenticationType: process.env.AWS_APPSYNC_AUTHENTICATIONTYPE,
        aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
        aws_cognito_region: process.env.AWS_COGNITO_REGION,
        aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
        aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
        aws_cognito_signup_attributes: process.env.AWS_COGNITO_SIGNUP_ATTRIBUTES,
    };
}

Amplify.configure(amplifyConfig);

async function fetchLocalData(knex, knexConfig, TABLE_NAME) {
    try {
        const db = knex(knexConfig.development);
        let rows = await db.select('*').from(TABLE_NAME);
        db.destroy();
        rows = rows.map(item => ({
            ...item,
            hasCert: item.hasCert === "True"
        }));
        return rows;
    } catch (error) {
        console.error('Knex query error:', error);
        throw error;
    }
}
async function fetchCloudData(LIST_TABLE, LIST_TABLE_STRING) {
    try {
        const response = await API.graphql({
            query: LIST_TABLE,
        });
        return response.data[LIST_TABLE_STRING].items;
    } catch (error) {
        console.error('Fetch cloud data error:', error);
    }
}

async function getRecord(id, GET_TABLE, GET_TABLE_STRING) {
    try {
        const response = await API.graphql({
            query: GET_TABLE,
            variables: { id },
        });
        return response.data[GET_TABLE_STRING];
    } catch (error) {
        console.error('Get record from cloud error:', error);
    }
}

async function deleteRecord(item, DELETE_TABLE, DELETE_TABLE_STRING) {
    try {
        const response = await API.graphql({
            query: DELETE_TABLE,
            variables: { input: { id: item.id, _version: item._version } },
        });
        console.log('Deleted successfully:', response.data[DELETE_TABLE_STRING]);
        return response.data[DELETE_TABLE_STRING];
    } catch (error) {
        console.error('Delete record from cloud error:', error);
    }
}

async function insertRecord(data, CREATED_TABLE, CREATED_TABLE_STRING) {
    const variables = {
        input: {
            id: data.id,
            title: data.title,
            source: data.source,
            description: data.description,
            cover: data.cover,
            objectives: data.objectives,
            syllabus: data.syllabus,
            price: data.price,
            cost: data.cost,
            topic: data.topic,
            duration: data.duration,
            type: data.type,
            hasCert: data.hasCert,
            language: data.language,
            level: data.level,
            license: data.license,
            published_at: data.published_at,
        }
    };

    try {
        const response = await API.graphql({
            query: CREATED_TABLE,
            variables: variables
        });
        console.log('Inserted successfully:', response.data[CREATED_TABLE_STRING]);
        return response.data[CREATED_TABLE_STRING];
    } catch (error) {
        console.error('Insert record error:', error);
    }
}

async function updateRecord(localData, cloudData, UPDATED_TABLE, UPDATED_TABLE_STRING) {
    const variables = {
        input: {
            id: localData.id,
            title: localData.title,
            source: localData.source,
            description: localData.description,
            cover: localData.cover,
            objectives: localData.objectives,
            syllabus: localData.syllabus,
            price: localData.price,
            cost: localData.cost,
            topic: localData.topic,
            duration: localData.duration,
            type: localData.type,
            hasCert: localData.hasCert,
            language: localData.language,
            level: localData.level,
            license: localData.license,
            published_at: localData.published_at,
            _version: cloudData._version
        }
    };

    try {
        const response = await API.graphql({
            query: UPDATED_TABLE,
            variables: variables
        });
        console.log('Updated successfully:', response.data[UPDATED_TABLE_STRING]);
        return response.data[UPDATED_TABLE_STRING];
    } catch (error) {
        console.error('Update record error:', error);
    }
}

async function main(
    LIST_TABLE,
    LIST_TABLE_STRING,
    CREATED_TABLE,
    CREATED_TABLE_STRING,
    GET_TABLE,
    GET_TABLE_STRING,
    UPDATED_TABLE,
    UPDATED_TABLE_STRING,
    DELETE_TABLE,
    DELETE_TABLE_STRING,
    TABLE_NAME) {
    try {
        await Auth.signIn(email, password);
    } catch (error) {
        console.error('User sign-in error:', error);
        return;
    }
    const localData = await fetchLocalData(knex, knexConfig, TABLE_NAME);
    const cloudData = await fetchCloudData(LIST_TABLE, LIST_TABLE_STRING);
    const localLength = localData.length;
    const cloudLength = cloudData.length;

    let recordsUpdated = 0;
    let recordsInserted = 0;
    let recordsDeleted = 0;
    for (let i = 0; i < localLength; i++) {
        const cloudItem = await getRecord(localData[i].id, GET_TABLE, GET_TABLE_STRING);
        if (cloudItem === null) {
            const response = await insertRecord(localData[i], CREATED_TABLE, CREATED_TABLE_STRING);
            if (response !== null) {
                recordsInserted++;
            };
        } else if (fieldsToCheck.some(field => localData[i][field] !== cloudItem[field])) {
            const response = await updateRecord(localData[i], cloudItem, UPDATED_TABLE, UPDATED_TABLE_STRING);
            if (response !== null) {
                recordsUpdated++;
            };
        }
    }
    console.log(`${recordsUpdated} records updated successfully.`);
    console.log(`${recordsInserted} records inserted successfully.`);
    for (let i = 0; i < cloudLength; i++) {
        if (!localData.some(item => item.id === cloudData[i].id)) {
            if (!cloudData[i]._deleted) {
                const response = await deleteRecord(cloudData[i], DELETE_TABLE, DELETE_TABLE_STRING);
                if (response !== null) {
                    recordsDeleted++;
                }
            }
        }
    }
    console.log(`${recordsDeleted} records deleted successfully.`);
    console.log("Synchronization completed.");
}

main(listCourses,
    'listCourses',
    createCourse,
    'createCourse',
    getCourse,
    'getCourse',
    updateCourse,
    'updateCourse',
    deleteCourse,
    'deleteCourse',
    'Course');