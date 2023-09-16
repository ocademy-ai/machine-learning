const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.COURSES;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
    table.string("id").unique().notNullable();
    table.string("title").notNullable();
    table.string("source").notNullable();
    table.string("description");
    table.string("cover");
    table.string("objectives");
    table.string("syllabus");
    table.string("price");
    table.integer("cost");
    table.string("topic");
    table.integer("duration");
    table.string("type");
    table.bool("hasCert");
    table.string("language");
    table.string("level");
    table.string("license");
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
