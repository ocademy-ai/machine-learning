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

async function updateCourseIdDisplayTemplate(
  knex,
  tables,
  template = "{{title}}"
) {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        _updateDisplayTemplate(knex, v, "courseId", template, "related-values")
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function updateUserIdDisplayTemplate(
  knex,
  tables,
  template = "{{name}}"
) {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        _updateDisplayTemplate(knex, v, "userId", template, "related-values")
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function updateTagIdDisplayTemplate(knex, tables, template = "{{name}}") {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        _updateDisplayTemplate(knex, v, "tagId", template, "related-values")
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

async function updateOrganizationIdDisplayTemplate(
  knex,
  tables,
  template = "{{name}}"
) {
  await Promise.all(
    tables.map(async (v) => {
      return new Promise((resolve, reject) => {
        _updateDisplayTemplate(
          knex,
          v,
          "organizationId",
          template,
          "related-values"
        )
          .then((r) => resolve(r))
          .catch((e) => reject(e));
      });
    })
  );
}

module.exports = {
  updateCourseIdDisplayTemplate,
  updateOrganizationIdDisplayTemplate,
  updateTagIdDisplayTemplate,
  updateUserIdDisplayTemplate,
};
