var { API } = require('aws-amplify');
var { Auth } = require('aws-amplify');
var { Amplify } = require('aws-amplify');
const knex = require('knex');
const knexConfig = require('./knexfile');

async function amplifyConfig(config) {
    Amplify.configure(config);
}

async function signIn(email, password) {
    try {
        await Auth.signIn(email, password);
    } catch (error) {
        console.error('User sign-in error:', error);
        return;
    };
}

async function fetchLocalData(TABLE_NAME) {
    try {
        const db = knex(knexConfig.development);
        let rows = await db.select('*').from(TABLE_NAME);
        db.destroy();
        rows = rows.map(item => {
            if (item.hasOwnProperty('hasCert')) {
                return {
                    ...item,
                    hasCert: item.hasCert === 1
                };
            }
            return item;
        });
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
    const { updatedAt, createdAt, ...inputData } = data;
    const variables = {
        input: inputData
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
    console.log('localdata', localData);
    console.log('clouddata', cloudData)
    const { updatedAt, createdAt, ...inputData } = localData;
    const variables = {
        input: {
            ...inputData,
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

async function sync(
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
    TABLE_NAME,
    fieldsToCheck) {
    const localData = await fetchLocalData(TABLE_NAME);
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
    console.log(`${recordsUpdated} records updated successfully in ${TABLE_NAME}.`);
    console.log(`${recordsInserted} records inserted successfully in ${TABLE_NAME}.`);
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
    console.log(`${recordsDeleted} records deleted successfully in ${TABLE_NAME}.`);
    console.log(`${TABLE_NAME} synchronization completed.`);
}

module.exports = {
    fetchLocalData,
    fetchCloudData,
    getRecord,
    deleteRecord,
    insertRecord,
    updateRecord,
    amplifyConfig,
    signIn,
    sync
}