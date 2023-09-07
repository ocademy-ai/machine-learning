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
          knex("directus_fields")
            .insert({
              collection: v,
              field: "id",
              special: "uuid",
              interface: "input",
              readonly: "1",
              hidden: "1",
              width: "full",
              required: "1",
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
          knex("directus_fields")
            .where({
              collection: v,
              field: "id",
            })
            .del()
            .then((r) => resolve(r))
            .catch((e) => reject(e));
        });
      })
    );
  }
};
