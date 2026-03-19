const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",   // change here
    database: "nitish_academy",
});

db.connect((err) => {
    if (err) {
        console.log("DB Connection Error ❌", err);
    } else {
        console.log("Database Connected ✅");
    }
});

module.exports = db;