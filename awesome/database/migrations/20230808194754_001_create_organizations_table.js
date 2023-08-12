const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.ORGANIZATIONS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
    table.string("id").unique().notNullable();
    table.string("name").notNullable();
    table.string("source").notNullable();
    table.string("description");
    table.string("logo");
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
