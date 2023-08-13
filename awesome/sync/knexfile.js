// knexfile.js

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "../database/data.db",
    },
    useNullAsDefault: true,
  },
};
