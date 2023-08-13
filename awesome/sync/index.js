var { Amplify } = require('aws-amplify');
var { API } = require('aws-amplify');
var { Auth } = require('aws-amplify');
const knex = require('knex');
const knexConfig = require('./knexfile');
const { createCourse } = require('./graphql/mutations.ts');
const { listCourses } = require('./graphql/queries.ts');
const fs = require('fs');
const path = require('path');

let amplifyConfig;
const configFilePath = path.join(__dirname, './.config.development.json');

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

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

Amplify.configure(amplifyConfig);

async function fetchLocalData(knex, knexConfig, TABLE_NAME) {
    try {
        const db = knex(knexConfig.development);
        const rows = await db.select('*').from(TABLE_NAME);
        db.destroy();
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
        console.error('GraphQL API error:', error);
    }
}

async function insertData(data, CREATED_TABLE, CREATED_TABLE_STRING) {
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
            hasCert: data.hasCert == 'True',
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
    } catch (error) {
        console.error('GraphQL API error:', error);
    }
}

async function main(LIST_TABLE, LIST_TABLE_STRING, CREATED_TABLE, CREATED_TABLE_STRING, TABLE_NAME) {
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

    switch (true) {
        case localLength === cloudLength:
            console.log("Data is already synchronized.");
            break;
        case localLength > cloudLength:
            const itemsToInsert = localData.slice(cloudLength);
            for (const item of itemsToInsert) {
                await insertData(item, CREATED_TABLE, CREATED_TABLE_STRING);
            }
            console.log(`${itemsToInsert.length} items inserted into the cloud.`);
            console.log("Synchronization completed.");
            break;
        default:
            console.log("Cloud data is more than local data, please check it");
            break;
    }
}
main(listCourses, 'listCourses', createCourse, 'createCourse', 'Course');
