const databaseOperations = require("../utils");
const { TABLES, DIRECTUS_TABLES } = require("../constants");
const intermediateTables = {
    COURSE_TAGS: TABLES.COURSE_TAGS,
    COURSE_ORGANIZATIONS: TABLES.COURSE_ORGANIZATIONS,
    USER_COURSES: TABLES.USER_COURSES,
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                await databaseOperations.addDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, v, 'courseId')

            })
        );
        await databaseOperations.addDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.COURSE_TAGS, 'tagId');
        await databaseOperations.addDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.COURSE_ORGANIZATIONS, 'organizationId');
        await databaseOperations.addDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.USER_COURSES, 'userId');
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                await databaseOperations.removeDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, v, 'courseId');
            })
        );
        await databaseOperations.removeDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.COURSE_TAGS, 'tagId');
        await databaseOperations.removeDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.COURSE_ORGANIZATIONS, 'organizationId');
        await databaseOperations.removeDirectusFKInterface(knex, DIRECTUS_TABLES.DIRECTUS_FIELDS, intermediateTables.USER_COURSES, 'userId');
    }
};
