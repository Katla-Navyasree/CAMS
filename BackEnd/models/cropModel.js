const db = require('../config/db');

// Create a new crop
const createCrop = (crop, callback) => {
  const sql = 'INSERT INTO crops SET ?';
  db.query(sql, crop, callback);
};

// Get all crops
const getAllCrops = (callback) => {
  const sql = 'SELECT * FROM crops';
  db.query(sql, callback);
};

// Get a specific crop by ID
const getCropById = (id, callback) => {
  const sql = 'SELECT * FROM crops WHERE id = ?';
  db.query(sql, [id], callback);
};

// Update a crop
const updateCrop = (id, crop, callback) => {
  const sql = 'UPDATE crops SET ? WHERE id = ?';
  db.query(sql, [crop, id], callback);
};

// Delete a crop
const deleteCrop = (id, callback) => {
  const sql = 'DELETE FROM crops WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = { createCrop, getAllCrops, getCropById, updateCrop, deleteCrop };
