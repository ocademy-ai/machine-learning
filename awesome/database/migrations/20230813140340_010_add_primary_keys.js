const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const ORGANIZATION = TABLES.ORGANIZATION;
const USER = TABLES.USER;
const CERTIFICATE = TABLES.CERTIFICATE;
const COURSE = TABLES.COURSE;
const TAG = TABLES.TAG;
const COURSETAGS = TABLES.COURSETAGS;
const COURSEORGANIZATIONS = TABLES.COURSEORGANIZATIONS;
const USERCOURSES = TABLES.USERCOURSES;

async function alterTable(knex, tableName, tableBuilderFunction) {
    try {
        await knex.schema.alterTable(tableName, tableBuilderFunction);
        console.log(`Table "${tableName}" altered successfully.`);
    } catch (error) {
        console.error("Error altering table:", error);
    } finally {
    }
}

exports.up = async function(knex) {
    await alterTable(knex, ORGANIZATION, (table) => {
        table.primary("id");
    });

    await alterTable(knex, USER, (table) => {
        table.primary("id");
    });

    await alterTable(knex, CERTIFICATE, (table) => {
        table.primary("id");
    });

    await alterTable(knex, COURSE, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TAG, (table) => {
        table.primary("id");
    });

    await alterTable(knex, COURSETAGS, (table) => {
        table.primary("id");
    });

    await alterTable(knex, COURSEORGANIZATIONS, (table) => {
        table.primary("id");
    });

    await alterTable(knex, USERCOURSES, (table) => {
        table.primary("id");
    });
}

exports.down = async function(knex) {
    await alterTable(knex, ORGANIZATION, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, USER, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, CERTIFICATE, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, COURSE, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TAG, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, COURSETAGS, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, COURSEORGANIZATIONS, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, USERCOURSES, (table) => {
        table.dropPrimary();
    });
}
