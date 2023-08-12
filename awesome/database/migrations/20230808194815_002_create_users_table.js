const databaseOperations = require("../utils");
const { TABLES } = require("../constants");

const TABLE_NAME = TABLES.USERS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return databaseOperations.createTable(knex, TABLE_NAME, (table) => {
    table.string("id").unique().notNullable();
    table.string("name").notNullable();
    table.string("source").notNullable();
    table.string("bio");
    table.string("title");
    table.string("email");
    table.string("phoneNumber");
    table.string("birth");
    table.string("gender");
    table.string("profession");
    table.string("nickname");
    table.string("portrait");
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
