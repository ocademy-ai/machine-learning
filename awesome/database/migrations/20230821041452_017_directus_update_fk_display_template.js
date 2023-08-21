const { TABLES, DIRECTUS_TABLES } = require("../constants");
const {
  updateOrganizationIdDisplayTemplate,
  updateCourseIdDisplayTemplate,
  updateTagIdDisplayTemplate,
  updateUserIdDisplayTemplate,
} = require("../utils/directus");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
  if (exists) {
    await updateCourseIdDisplayTemplate(knex, [
      TABLES.COURSE_ORGANIZATIONS,
      TABLES.COURSE_TAGS,
      TABLES.USER_COURSES,
    ]);
    await updateTagIdDisplayTemplate(knex, [TABLES.COURSE_TAGS]);
    await updateUserIdDisplayTemplate(knex, [TABLES.USER_COURSES]);
    await updateOrganizationIdDisplayTemplate(knex, [
      TABLES.COURSE_ORGANIZATIONS,
    ]);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
  if (exists) {
    await updateCourseIdDisplayTemplate(knex, [
      TABLES.COURSE_ORGANIZATIONS,
      TABLES.COURSE_TAGS,
      TABLES.USER_COURSES,
    ], "{{id}}");
    await updateTagIdDisplayTemplate(knex, [TABLES.COURSE_TAGS], "{{id}}");
    await updateUserIdDisplayTemplate(knex, [TABLES.USER_COURSES], "{{id}}");
    await updateOrganizationIdDisplayTemplate(knex, [
      TABLES.COURSE_ORGANIZATIONS, "{{id}}",
    ]);
  }
};
