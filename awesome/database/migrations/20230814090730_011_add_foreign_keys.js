const { alterTable } = require("../utils");
const { TABLES, alterTable } = require("../constants");

exports.up = async function (knex) {
  await alterTable(knex, TABLES.COURSE_TAGS, (table) => {
    table.foreign("courseId").references("id").inTable(TABLES.COURSE);
    table.foreign("tagId").references("id").inTable(TABLES.TAG);
  });

  await alterTable(knex, TABLES.COURSE_ORGANIZATIONS, (table) => {
    table.foreign("courseId").references("id").inTable(TABLES.COURSE);
    table
      .foreign("organizationId")
      .references("id")
      .inTable(TABLES.ORGANIZATION);
  });

  await alterTable(knex, TABLES.USER_COURSES, (table) => {
    table.foreign("userId").references("id").inTable(TABLES.USER);
    table.foreign("courseId").references("id").inTable(TABLES.COURSE);
  });
};

exports.down = async function (knex) {
  await alterTable(knex, TABLES.COURSE_TAGS, (table) => {
    table.dropForeign("courseId");
    table.dropForeign("tagId");
  });

  await alterTable(knex, TABLES.COURSE_ORGANIZATIONS, (table) => {
    table.dropForeign("courseId");
    table.dropForeign("organizationId");
  });

  await alterTable(knex, TABLES.USER_COURSES, (table) => {
    table.dropForeign("userId");
    table.dropForeign("courseId");
  });
};