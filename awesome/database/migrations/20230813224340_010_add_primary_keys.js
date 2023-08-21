const { TABLES } = require("../constants");

exports.up = async function (knex) {
  await Promise.all(
    Object.values(TABLES).map(async (v) => {
      return new Promise((resolve, reject) => {
        alterTable(knex, v, (table) => {
          table.primary("id");
        })
        .then((r) => resolve(r))
        .catch((e) => reject(e));
      });
    })
  );
};

exports.down = async function (knex) {
  await Promise.all(
    Object.values(TABLES).map(async (v) => {
      return new Promise((resolve, reject) => {
        alterTable(knex, TABLES.ORGANIZATION, (table) => {
          table.dropPrimary('id');
        })
        .then((r) => resolve(r))
        .catch((e) => reject(e));
      });
    })
  );
};
