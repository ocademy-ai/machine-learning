const { TABLES, DIRECTUS_TABLES } = require("../constants");
const { updateDisplayTemplates } = require("../utils/directus");

async function _update(knex, template) {
  const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
  if (exists) {
    await updateDisplayTemplates(
      knex,
      [TABLES.COURSE_ORGANIZATIONS, TABLES.COURSE_TAGS, TABLES.USER_COURSES],
      "courseId",
      template ?? "{{title}}"
    );

    await updateDisplayTemplates(
      knex,
      [TABLES.COURSE_TAGS],
      "tagId",
      template ?? "{{name}}"
    );

    await updateDisplayTemplates(
      knex,
      [TABLES.USER_COURSES],
      "userId",
      template ?? "{{name}}"
    );

    await updateDisplayTemplates(
      knex,
      [TABLES.COURSE_ORGANIZATIONS],
      "courseId",
      template ?? "{{name}}"
    );
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await _update(knex);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await _update(knex, "{{id}}");
};
