/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex('directus_fields').insert({
      collection: 'CourseOrganizations',
      field: 'courseId',
      special: null,
      interface: 'select-dropdown-m2o',
      options: '{"template":"{{id}}"}',
      display: null,
      display_options: null,
      readonly: 0,
      hidden: 0,
      sort: null,
      width: 'full',
      translations: null,
      note: null,
      conditions: null,
      required: 0,
      group: null,
      validation: null,
      validation_message: null
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex('directus_fields')
      .where('id', 136)
      .del();
  };
