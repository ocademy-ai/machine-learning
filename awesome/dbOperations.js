const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const crypto = require('crypto');


// create table
async function createTable(tableName, tableBuilderFunction) {
   try {
    await db.schema.createTable(tableName, tableBuilderFunction);
    console.log(`Table "${tableName}" created successfully.`);
    process.exit(0);
  } catch (error) {
    console.error('Error creating table:', error);
    process.exit(1);
  } finally {
    db.destroy();
  };
}

// delete table
async function dropTable(tableName) {
    try {
      await db.schema.dropTableIfExists(tableName);
      console.log(`Table "${tableName}" dropped successfully.`);
      process.exit(0);
    } catch (error) {
      console.error('Error dropping table:', error);
      process.exit(1);
    } finally {
        db.destroy();
    };
  }

// insert record
async function insertRecord(tableName, data) {
    try {
      const randomUUID = crypto.randomUUID();
      await db(tableName).insert({
        id: randomUUID,
        ...data
      });
      console.log('Record inserted successfully.');
      process.exit(0);
    } catch (error) {
      console.error('Error inserting record:', error);
      process.exit(1);
    } finally {
        db.destroy();
    };
  }
   

// update record
async function updateRecord(tableName, conditions, newData) {
    try {
      await db(tableName).where(conditions).update(newData);
      console.log('Record updated successfully.');
      process.exit(0);
    } catch (error) {
      console.error('Error updating record:', error);
      process.exit(1);
    } finally {
        db.destroy();
    };
  }

// delete record
async function deleteRecord(tableName, conditions) {
    try {
      await db(tableName).where(conditions).del();
      console.log('Record deleted successfully.');
      process.exit(0);
    } catch (error) {
      console.error('Error deleting record:', error);
      process.exit(1);
    } finally {
        db.destroy();
    };
  }

// delete column
async function deleteColumn(tableName, columnName) {
    try {
    await db.schema.alterTable(tableName, table => {
        table.dropColumn(columnName);
    });
    console.log(`Column "${columnName}" deleted successfully from table "${tableName}".`);
    process.exit(0);
    } catch (error) {
     console.error('Error deleting column', error);
     process.exit(1);
    } finally {
        db.destroy();
    };
}
// insert column
async function insertColumn(tableName, columnName, columnType) {
    try {
      await db.schema.alterTable(tableName, table => {
        table[columnType](columnName);
      });
      console.log(`Column "${columnName}" inserted successfully to table "${tableName}".`);
      process.exit(0);
    } catch (error) {
      console.error('Error inserting column:', error);
      process.exit(1);
    } finally {
      db.destroy();
    }
  }
  

module.exports = {
  deleteRecord,
  updateRecord,
  insertRecord,
  dropTable,
  createTable,
  deleteColumn,
  insertColumn
};
