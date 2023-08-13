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
        knex.schema.renameTable('certificates', CERTIFICATE),
        knex.schema.renameTable('courses', COURSE),
        knex.schema.renameTable('organizations', ORGANIZATION),
        knex.schema.renameTable('users', USER),
        knex.schema.renameTable('tags', TAG),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return Promise.all([
        knex.schema.renameTable(CERTIFICATE, 'certificates'),
        knex.schema.renameTable(COURSE, 'courses'),
        knex.schema.renameTable(ORGANIZATION, 'organizations'),
        knex.schema.renameTable(USER, 'users'),
        knex.schema.renameTable(TAG, 'tags'),
    ]);
};
