const { createCrop, getAllCrops, getCropById, updateCrop, deleteCrop } = require('../models/cropModel');

// Create a crop
exports.createCrop = (req, res) => {
  const { name, type, season, growth_time, optimal_temp, water_needs, soil_type } = req.body;
  const crop = { name, type, season, growth_time, optimal_temp, water_needs, soil_type };

  createCrop(crop, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Crop created successfully" });
  });
};

// Get all crops
exports.getAllCrops = (req, res) => {
  getAllCrops((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get a crop by ID
exports.getCropById = (req, res) => {
  const { id } = req.params;
  getCropById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length) return res.status(404).json({ message: "Crop not found" });
    res.status(200).json(result[0]);
  });
};

// Update a crop
exports.updateCrop = (req, res) => {
  const { id } = req.params;
  const { name, type, season, growth_time, optimal_temp, water_needs, soil_type } = req.body;
  const updatedCrop = { name, type, season, growth_time, optimal_temp, water_needs, soil_type };

  updateCrop(id, updatedCrop, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Crop updated successfully" });
  });
};

// Delete a crop
exports.deleteCrop = (req, res) => {
  const { id } = req.params;
  deleteCrop(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Crop deleted successfully" });
  });
};
