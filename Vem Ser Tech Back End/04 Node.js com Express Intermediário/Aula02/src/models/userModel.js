// models/userModel.js
const db = require('../config/dbConfig');

function getAllUsers(callback) {
  db.query('SELECT * FROM users', callback);
}

function getUserById(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
}

function createUser(data, callback) {
  db.query('INSERT INTO users SET ?', [data], callback);
}

function updateUser(id, data, callback) {
  db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
}

function deleteUser(id, callback) {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };