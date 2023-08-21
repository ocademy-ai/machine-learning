const { TABLES, DIRECTUS_TABLES } = require("../constants");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
    if (exists) {
        await Promise.all(
            Object.values(TABLES).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({ collection: v, field: 'createdAt' })
                        .update({
                            hidden: 0,
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await Promise.all(
            Object.values(TABLES).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({ collection: v, field: 'updatedAt' })
                        .update({
                            hidden: 0,
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
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
            Object.values(TABLES).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({ collection: v, field: 'createdAt' })
                        .update({
                            hidden: 1,
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
        await Promise.all(
            Object.values(TABLES).map(async (v) => {
                return new Promise((resolve, reject) => {
                    knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
                        .where({ collection: v, field: 'updatedAt' })
                        .update({
                            hidden: 1,
                        })
                        .then((r) => resolve(r))
                        .catch((e) => reject(e));
                });
            })
        );
    }
};
