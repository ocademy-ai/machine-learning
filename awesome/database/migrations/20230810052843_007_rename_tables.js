const { TABLES } = require("../constants");

const ORGANIZATION = TABLES.ORGANIZATION;
const USER = TABLES.USER;
const CERTIFICATE = TABLES.CERTIFICATE;
const COURSE = TABLES.COURSE;
const TAG = TABLES.TAG;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return Promise.all([
        knex.schema.renameTable('certificate', CERTIFICATE),
        knex.schema.renameTable('course', COURSE),
        knex.schema.renameTable('organization', ORGANIZATION),
        knex.schema.renameTable('user', USER),
        knex.schema.renameTable('tag', TAG),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return Promise.all([
        knex.schema.renameTable(CERTIFICATE, 'certificate'),
        knex.schema.renameTable(COURSE, 'course'),
        knex.schema.renameTable(ORGANIZATION, 'organization'),
        knex.schema.renameTable(USER, 'user'),
        knex.schema.renameTable(TAG, 'tag'),
    ]);
};
