const sql = require ("mysql2");

const connection = sql.createConnection({
    host: "db.cshack.site",
    port: "3306",
    user: "group09",
    password: "206220222",
    database: "group09",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;