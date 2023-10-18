const { DIRECTUS_TABLES } = require("../constants");
const crypto = require("crypto");

function _updateDisplayTemplate(knex, collection, field, template, display) {
  return knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
    .where({
      collection,
      field,
    })
    .update({
      options: JSON.stringify({ template }),
      display,
    });
}

async function insertField(knex, data) {
  return knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
    .insert(data)
}

async function deleteField(knex, data) {
  return knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
    .where(data)
    .del()
}

async function insertIdFields(
  knex,
  tables,
) {
  await Promise.all(
    tables.map(async (v) => {
      const idFieldData = {
        collection: v,
        field: "id",
        special: "uuid",
        interface: "input",
        readonly: "1",
        hidden: "0",
        width: "full",
        required: "0",
      };
      return new Promise((resolve, reject) => {
        insertField(knex, idFieldData)
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function insertTimeFields(
  knex,
  tables,
  field,
  sort,
) {
  await Promise.all(
    tables.map(async (v) => {
      const createdAtFieldData = {
        collection: v,
        field,
        special: "date-created,cast-timestamp",
        interface: "datetime",
        display: "datetime",
        display_options: '{"relative":true}',
        readonly: "1",
        hidden: "0",
        sort,
        width: "half",
        required: "0",
      };
      return new Promise((resolve, reject) => {
        insertField(knex, createdAtFieldData)
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function insertForeignIdFields(
  knex,
  tables,
  field,
  template
) {
  await Promise.all(
    tables.map(async (v) => {
      const createdAtFieldData = {
        collection: v,
        field,
        interface: "select-dropdown-m2o",
        options: JSON.stringify({ template }),
        display: "related-values",
        readonly: "0",
        hidden: "0",
        width: "full",
        required: "0",
      };
      return new Promise((resolve, reject) => {
        insertField(knex, createdAtFieldData)
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function deleteField(
  knex,
  tables,
  field
) {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        knex(DIRECTUS_TABLES.DIRECTUS_FIELDS)
          .where({
            collection: v,
            field,
          })
          .del()
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function updateDisplayTemplates(knex, tables, field, template) {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        _updateDisplayTemplate(knex, v, field, template, "related-values")
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

module.exports = {
  insertField,
  insertIdFields,
  insertTimeFields,
  insertForeignIdFields,
  deleteField,
  updateDisplayTemplates,
};
