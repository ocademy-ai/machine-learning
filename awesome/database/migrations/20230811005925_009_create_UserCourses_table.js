const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.USER_COURSES;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.alterTable(knex, TABLE_NAME, (table) => {
    table.string("id").unique().notNullable();
    table.string("userId").notNullable();
    table.string("courseId").notNullable();
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
