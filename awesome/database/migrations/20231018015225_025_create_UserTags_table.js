const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.USER_TAGS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
    table.string("id").primary().notNullable();
    table.string("tagId").references("id").inTable(TABLES.TAG).notNullable();
    table.string("userId").references("id").inTable(TABLES.USER).notNullable();
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