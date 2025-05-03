const db = require('../config/db');

const createUser = (user, callback) => {
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, user, callback);
};

const findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], callback);
};

module.exports = { createUser, findUserByEmail };