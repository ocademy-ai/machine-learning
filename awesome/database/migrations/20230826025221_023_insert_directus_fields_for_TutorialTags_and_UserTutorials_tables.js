const { TABLES, DIRECTUS_TABLES } = require("../constants");
const intermediateTables = {
    TUTORIAL_TAGS: TABLES.TUTORIAL_TAGS,
    USER_TUTORIALS: TABLES.USER_TUTORIALS,
};
const DIRECTUS = require("../utils/directus")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await DIRECTUS.insertIdField(knex, Object.values(intermediateTables));
        await DIRECTUS.insertTimeField(knex, Object.values(intermediateTables), "createdAt", "3");
        await DIRECTUS.insertTimeField(knex, Object.values(intermediateTables), "updatedAt", "4");
        await DIRECTUS.insertForeignIdField(knex, Object.values(intermediateTables), "tutorialId", "{{title}}");
        await DIRECTUS.insertForeignIdField(knex, [intermediateTables.TUTORIAL_TAGS], "tagId", "{{name}}");
        await DIRECTUS.insertForeignIdField(knex, [intermediateTables.USER_TUTORIALS], "userId", "{{name}}");
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await DIRECTUS.deleteField(knex, Object.values(intermediateTables), "id");
        await DIRECTUS.deleteField(knex, Object.values(intermediateTables), "createdAt");
        await DIRECTUS.deleteField(knex, Object.values(intermediateTables), "updatedAt");
        await DIRECTUS.deleteField(knex, Object.values(intermediateTables), "tutorialId");
        await DIRECTUS.deleteField(knex, [intermediateTables.TUTORIAL_TAGS], "tagId");
        await DIRECTUS.deleteField(knex, [intermediateTables.USER_TUTORIALS], "userId");
    }
};