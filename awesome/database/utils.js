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

module.exports = {
  deleteRecord,
  updateRecord,
  insertRecord,
  dropTable,
  createTable,
  deleteColumn,
  insertColumn,
};
