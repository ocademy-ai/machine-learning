/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const idsToUpdate = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

  return knex('directus_fields')
    .whereIn('id', idsToUpdate)
    .update({
      readonly: 0,
      hidden: 0
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex('directus_fields')
      .where('id', 47)
      .update({
        readonly: 1,
        hidden: 1
      });
  };
