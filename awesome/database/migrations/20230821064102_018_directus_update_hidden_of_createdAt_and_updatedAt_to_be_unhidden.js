const { TABLES, DIRECTUS_TABLES } = require("../constants");

async function _update(knex, hidden) {
  const exists = await knex.schema.hasTable(DIRECTUS_TABLES.DIRECTUS_FIELDS);
  if (exists) {
    await Promise.all(
      Object.values(TABLES).map(async (v) => {
        return new Promise((resolve, reject) => {
          knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
            .where({ collection: v, field: "updatedAt" })
            .orWhere({ collection: v, field: "createdAt" })
            .update({
              hidden,
            })
            .then((r) => resolve(r))
            .catch((e) => reject(e));
        });
      })
    );
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  _update(knex, 0);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  _update(knex, 1);
};
