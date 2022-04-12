const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "movie_db_mulesoft",
    host: "localhost",
    port: 5432
})

module.exports = pool;