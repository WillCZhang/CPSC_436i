const Database = require('./database');
const collection = "user";
let db = null;

function User() {
    db = new Database();
}

User.prototype.exist = (username) => {
    let condition = {"id": username};
    return db.find(collection, condition).length === 1;
}

module.exports = User;