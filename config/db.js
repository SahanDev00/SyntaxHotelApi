require('dotenv').config();
const sql = require('mssql');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: { encrypt: false, trustServerCertificate: true }
};

// Connection pool
const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log("✅ SQL Server Connected");
        return pool;
    })
    .catch(err => console.error("❌ DB Connection Failed", err));

module.exports = { sql, poolPromise };
