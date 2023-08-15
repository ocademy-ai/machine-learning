const { TABLES } = require("../constants");

exports.up = async function (knex) {
  await alterTable(knex, TABLES.ORGANIZATION, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.USER, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.CERTIFICATE, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.COURSE, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.TAG, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.COURSE_TAGS, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.COURSE_ORGANIZATIONS, (table) => {
    table.primary("id");
  });

  await alterTable(knex, TABLES.USER_COURSES, (table) => {
    table.primary("id");
  });
};

exports.down = async function (knex) {
  await alterTable(knex, TABLES.ORGANIZATION, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.USER, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.CERTIFICATE, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.COURSE, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.TAG, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.COURSE_TAGS, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.COURSE_ORGANIZATIONS, (table) => {
    table.dropPrimary();
  });

  await alterTable(knex, TABLES.USER_COURSES, (table) => {
    table.dropPrimary();
  });
};
