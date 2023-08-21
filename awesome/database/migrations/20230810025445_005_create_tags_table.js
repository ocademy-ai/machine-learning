const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.TAGS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
        table.string("id").unique().notNullable();
        table.string("name").notNullable();
        table.string("description");
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
