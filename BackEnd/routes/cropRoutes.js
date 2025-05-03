const express = require('express');
const router = express.Router();
const { createCrop, getAllCrops, getCropById, updateCrop, deleteCrop } = require('../controllers/cropController');

router.post('/', createCrop);          // Create a new crop
router.get('/', getAllCrops);         // Get all crops
router.get('/:id', getCropById);      // Get a specific crop
router.put('/:id', updateCrop);      // Update a crop
router.delete('/:id', deleteCrop);   // Delete a crop

module.exports = router;
