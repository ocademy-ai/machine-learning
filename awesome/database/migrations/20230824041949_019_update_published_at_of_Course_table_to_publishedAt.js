/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("Course", function (table) {
    table.renameColumn("publishedAt", "publishedAt");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("Course", function (table) {
    table.renameColumn("publishedAt", "publishedAt");
  });
};
