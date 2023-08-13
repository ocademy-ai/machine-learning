const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.COURSEORGANIZATIONS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
        table.string("id").unique().notNullable();
        table.string("courseId").notNullable();
        table.string("organizationId").notNullable();
        table.timestamps(true, true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable(TABLE_NAME);
};
