const { TABLES } = require("../constants");
const TABLE_NAME = TABLES.COURSE;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.table(TABLE_NAME, function(table) {
      table.integer('authorCount'); 
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table(TABLE_NAME, function(table) {
      table.dropColumn('authorCount');
    });
  };
