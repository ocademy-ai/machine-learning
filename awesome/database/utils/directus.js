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
  updateDisplayTemplates,
};
