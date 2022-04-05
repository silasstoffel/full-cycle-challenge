const { Pool } = require("pg");

const pool = new Pool({
  user: "fullcycle",
  database: "fullcycle",
  password: "fullcycle",
  port: 5432,
  host: "full-cycle-db",
});

module.exports = { pool };
