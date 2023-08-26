const { TABLES, DIRECTUS_TABLES } = require("../constants");
const directusUtil = require("../utils/directus")

const intermediateTables = {
    TUTORIAL_TAGS: TABLES.TUTORIAL_TAGS,
    USER_TUTORIALS: TABLES.USER_TUTORIALS,
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await directusUtil.insertIdFields(knex, Object.values(intermediateTables));
        await directusUtil.insertTimeFields(knex, Object.values(intermediateTables), "createdAt", "3");
        await directusUtil.insertTimeFields(knex, Object.values(intermediateTables), "updatedAt", "4");
        await directusUtil.insertForeignIdFields(knex, Object.values(intermediateTables), "tutorialId", "{{title}}");
        await directusUtil.insertForeignIdFields(knex, [intermediateTables.TUTORIAL_TAGS], "tagId", "{{name}}");
        await directusUtil.insertForeignIdFields(knex, [intermediateTables.USER_TUTORIALS], "userId", "{{name}}");
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await directusUtil.deleteField(knex, Object.values(intermediateTables), "id");
        await directusUtil.deleteField(knex, Object.values(intermediateTables), "createdAt");
        await directusUtil.deleteField(knex, Object.values(intermediateTables), "updatedAt");
        await directusUtil.deleteField(knex, Object.values(intermediateTables), "tutorialId");
        await directusUtil.deleteField(knex, [intermediateTables.TUTORIAL_TAGS], "tagId");
        await directusUtil.deleteField(knex, [intermediateTables.USER_TUTORIALS], "userId");
    }
};