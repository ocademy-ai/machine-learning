const { TABLES, DIRECTUS_TABLES } = require("../constants");
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
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .insert({
                            collection: v,
                            field: "id",
                            special: "uuid",
                            interface: "input",
                            readonly: "1",
                            hidden: "0",
                            width: "full",
                            required: "0",
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .insert({
                            collection: v,
                            field: "createdAt",
                            special: "date-created,cast-timestamp",
                            interface: "datetime",
                            display: "datetime",
                            display_options: '{"relative":true}',
                            readonly: "1",
                            hidden: "0",
                            sort: "3",
                            width: "half",
                            required: "0",
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .insert({
                            collection: v,
                            field: "updatedAt",
                            special: "date-updated,cast-timestamp",
                            interface: "datetime",
                            display: "datetime",
                            display_options: '{"relative":true}',
                            readonly: "1",
                            hidden: "0",
                            sort: "4",
                            width: "half",
                            required: "0",
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .insert({
                            collection: v,
                            field: "tutorialId",
                            interface: "select-dropdown-m2o",
                            options: '{"template":"{{title}}"}',
                            display: "related-values",
                            readonly: "0",
                            hidden: "0",
                            width: "full",
                            required: "0",
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await new Promise((resolve, reject) => {
            knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                .insert({
                    collection: "TutorialTags",
                    field: "tagId",
                    interface: "select-dropdown-m2o",
                    options: '{"template":"{{name}}"}',
                    display: "related-values",
                    readonly: "0",
                    hidden: "0",
                    width: "full",
                    required: "0",
                })
                .then((r) => resolve(r))
                .catch((e) => reject(e));
        });
        await new Promise((resolve, reject) => {
            knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                .insert({
                    collection: "UserTutorials",
                    field: "userId",
                    interface: "select-dropdown-m2o",
                    options: '{"template":"{{name}}"}',
                    display: "related-values",
                    readonly: "0",
                    hidden: "0",
                    width: "full",
                    required: "0",
                })
                .then((r) => resolve(r))
                .catch((e) => reject(e));
        });
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
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({
                            collection: v,
                            field: "id"
                        })
                        .del()
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );

        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({
                            collection: v,
                            field: "createdAt"
                        })
                        .del()
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );

        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({
                            collection: v,
                            field: "updatedAt"
                        })
                        .del()
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );

        await Promise.all(
            Object.values(intermediateTables).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({
                            collection: v,
                            field: "tutorialId"
                        })
                        .del()
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );

        await new Promise((resolve, reject) => {
            knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                .where({
                    collection: "TutorialTags",
                    field: "tagId"
                })
                .del()
                .then((r) => resolve(r))
                .catch((e) => reject(e));
        });

        await new Promise((resolve, reject) => {
            knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                .where({
                    collection: "UserTutorials",
                    field: "userId"
                })
                .del()
                .then((r) => resolve(r))
                .catch((e) => reject(e));
        });
    }
};