const { TABLES } = require("../constants");

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
    await alterTable(knex, TABLES.ORGANIZATION, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.USER, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.CERTIFICATE, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.COURSE, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.TAG, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.COURSETAGS, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.COURSEORGANIZATIONS, (table) => {
        table.primary("id");
    });

    await alterTable(knex, TABLES.USERCOURSES, (table) => {
        table.primary("id");
    });
}

exports.down = async function(knex) {
    await alterTable(knex, TABLES.ORGANIZATION, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.USER, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.CERTIFICATE, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.COURSE, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.TAG, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.COURSETAGS, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.COURSEORGANIZATIONS, (table) => {
        table.dropPrimary();
    });

    await alterTable(knex, TABLES.USERCOURSES, (table) => {
        table.dropPrimary();
    });
}
