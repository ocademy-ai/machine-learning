const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.TUTORIAL;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
    table.string("id").primary().notNullable();
    table.string("title").notNullable();
    table.string("source").notNullable();
    table.string("description");
    table.string("objectives");
    table.string("syllabus");
    table.string("price");
    table.integer("cost");
    table.string("topic");
    table.string("language");
    table.string("level");
    table.string("prerequisites");
    table.string("references");
    table.string("publishedAt");
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
