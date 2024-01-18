const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE produtos (nome TEXT, quantidade INTEGER, preco REAL)");
});

module.exports = db;
