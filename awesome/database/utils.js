const crypto = require("crypto");

// create table
function createTable(knex, tableName, tableBuilderFunction) {
  try {
    console.log(`Table "${tableName}" created successfully.`);
    return knex.schema.createTable(tableName, tableBuilderFunction);
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
  }
}

// alter table
async function alterTable(knex, tableName, tableBuilderFunction) {
  try {
    await knex.schema.alterTable(tableName, tableBuilderFunction);
    console.log(`Table "${tableName}" altered successfully.`);
  } catch (error) {
    console.error("Error altering table:", error);
  } finally {
  }
}

// delete table
async function dropTable(tableName) {
  try {
    await knex.schema.dropTableIfExists(tableName);
    console.log(`Table "${tableName}" dropped successfully.`);
    process.exit(0);
  } catch (error) {
    console.error("Error dropping table:", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}

// insert record
async function insertRecord(knex, tableName, data) {
  try {
    const randomUUID = crypto.randomUUID();
    await knex(tableName).insert({
      id: randomUUID,
      ...data,
    });
    console.log("Record inserted successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error inserting record:", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}

// update record
async function updateRecord(knex, tableName, conditions, newData) {
  try {
    await knex(tableName).where(conditions).update(newData);
    console.log("Record updated successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error updating record:", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}

// delete record
async function deleteRecord(knex, tableName, conditions) {
  try {
    await knex(tableName).where(conditions).del();
    console.log("Record deleted successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error deleting record:", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}

// delete column
async function deleteColumn(knex, tableName, columnName) {
  try {
    await knex.schema.alterTable(knex, tableName, (table) => {
      table.dropColumn(columnName);
    });
    console.log(
      `Column "${columnName}" deleted successfully from table "${tableName}".`
    );
    process.exit(0);
  } catch (error) {
    console.error("Error deleting column", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}
// insert column
async function insertColumn(knex, tableName, columnName, columnType) {
  try {
    await knex.schema.alterTable(knex, tableName, (table) => {
      table[columnType](columnName);
    });
    console.log(
      `Column "${columnName}" inserted successfully to table "${tableName}".`
    );
    process.exit(0);
  } catch (error) {
    console.error("Error inserting column:", error);
    process.exit(1);
  } finally {
    knex.destroy();
  }
}
// insert directus field
async function addDirectusFKInterface(knex, tableName, collection, field) {
  try {
    await knex(tableName)
      .insert({
        collection,
        field,
        interface: 'select-dropdown-m2o',
        options: '{"template":"{{id}}"}',
        readonly: 0,
        hidden: 0,
        width: 'full',
        required: 0,
      });
  } catch (error) {
    console.error("Error inserting directus fields:", error);
  } finally {
    knex.destroy();
  }
}
// remove directus field
async function removeDirectusFKInterface(knex, tableName, collection, field) {
  try {
    await knex(tableName)
    .where({ collection, field })
    .del();
  } catch (error) {
    console.error("Error removing directus fields:", error);
  } finally {
    knex.destroy();
  }
}
module.exports = {
  deleteRecord,
  updateRecord,
  insertRecord,
  dropTable,
  createTable,
  deleteColumn,
  insertColumn,
  alterTable,
  addDirectusFKInterface,
  removeDirectusFKInterface,
};
