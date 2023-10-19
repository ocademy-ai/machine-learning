const { TABLES, DIRECTUS_TABLES } = require("../constants");
const directusUtil = require("../utils/directus")

const TABLE_NAME=TABLES.USER_TAGS;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await directusUtil.insertIdFields(knex, [TABLE_NAME]);
        await directusUtil.insertTimeFields(knex, [TABLE_NAME], "createdAt", "3");
        await directusUtil.insertTimeFields(knex, [TABLE_NAME], "updatedAt", "4");
        await directusUtil.insertForeignIdFields(knex, [TABLE_NAME], "userId", "{{name}}");
        await directusUtil.insertForeignIdFields(knex, [TABLE_NAME], "tagId", "{{name}}");
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await directusUtil.deleteField(knex, [TABLE_NAME], "id");
        await directusUtil.deleteField(knex, [TABLE_NAME], "createdAt");
        await directusUtil.deleteField(knex, [TABLE_NAME], "updatedAt");
        await directusUtil.deleteField(knex, [TABLE_NAME], "userId");
        await directusUtil.deleteField(knex, [TABLE_NAME], "tagId");
    }
};