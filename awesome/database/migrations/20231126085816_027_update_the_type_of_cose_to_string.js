const { TABLES } = require("../constants");
const databaseOperations = require("../utils");
const tablesToModify = {
    TUTORIAL: TABLES.TUTORIAL,
    COURSE: TABLES.COURSE,
};

exports.up = async function (knex) {
    await Promise.all(
        Object.values(tablesToModify).map(async (v) => {
            return (() => {
                databaseOperations.alterTable(knex, v, (table) => {
                    table.string('cost', 255).alter();
                })
            });
        })
    );
};

exports.down = async function (knex) {
    await Promise.all(
        Object.values(tablesToModify).map(async (v) => {
            return (() => {
                databaseOperations.alterTable(knex, v, (table) => {
                    table.integer('cost').alter();
                })
            });
        })
    );
};
