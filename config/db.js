require('dotenv').config();
const sql = require('mssql');

const dbConfig = {
    user: 'sa',
    password: 'syntaxware0661',
    server: 'localhost', // Remove \syntaxware for now
    database: 'SyntaxHotel',
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433 // Explicitly define the port
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
