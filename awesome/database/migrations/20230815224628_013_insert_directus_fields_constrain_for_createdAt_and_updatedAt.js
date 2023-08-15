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
              field: "createdAt",
              special: "date-created,cast-timestamp",
              interface: "datetime",
              display: "datetime",
              display_options: '{"relative":true}',
              readonly: "1",
              hidden: "1",
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
        Object.values(TABLES).map(async (v) => {
          return new Promise((resolve, reject) => {
            knex("directus_fields")
              .insert({
                collection: v,
                field: "updatedAt",
                special: "date-updated,cast-timestamp",
                interface: "datetime",
                display: "datetime",
                display_options: '{"relative":true}',
                readonly: "1",
                hidden: "1",
                sort: "4",
                width: "half",
                required: "0",
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
              field: "createdAt",
            })
            .del()
            .then((r) => resolve(r))
            .catch((e) => reject(e));
        });
      })
    );
    await Promise.all(
        Object.values(TABLES).map(async (v) => {
          return new Promise((resolve, reject) => {
            knex("directus_fields")
              .where({
                collection: v,
                field: "updatedAt",
              })
              .del()
              .then((r) => resolve(r))
              .catch((e) => reject(e));
          });
        })
      );
  }
};
