const { TABLES, alterTable } = require("../constants");

exports.up = async function (knex) {

    await alterTable(knex, TABLES.COURSETAGS, (table) => {
        table
            .foreign("courseId")
            .references("id")
            .inTable(TABLES.COURSE);
        table
            .foreign("tagId")
            .references("id")
            .inTable(TABLES.TAG);
    });

    await alterTable(knex, TABLES.COURSEORGANIZATIONS, (table) => {
        table
            .foreign("courseId")
            .references("id")
            .inTable(TABLES.COURSE);
        table
            .foreign("organizationId")
            .references("id")
            .inTable(TABLES.ORGANIZATION);
    });

    await alterTable(knex, TABLES.USERCOURSES, (table) => {
        table
            .foreign("userId")
            .references("id")
            .inTable(TABLES.USER);
        table
            .foreign("courseId")
            .references("id")
            .inTable(TABLES.COURSE);
    });
}

exports.down = async function (knex) {
    await alterTable(knex, TABLES.COURSETAGS, (table) => {
        table.dropForeign("courseId");
        table.dropForeign("tagId");
    });

    await alterTable(knex, TABLES.COURSEORGANIZATIONS, (table) => {
        table.dropForeign("courseId");
        table.dropForeign("organizationId");
    });

    await alterTable(knex, TABLES.USERCOURSES, (table) => {
        table.dropForeign("userId");
        table.dropForeign("courseId");
    });
}