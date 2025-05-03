import React, { useState } from 'react';
import cropService from '../services/cropService';

const CropForm = ({ cropToEdit, onSuccess }) => {
  const [crop, setCrop] = useState({
    name: cropToEdit?.name || '',
    type: cropToEdit?.type || '',
    season: cropToEdit?.season || '',
    growth_time: cropToEdit?.growth_time || '',
    optimal_temp: cropToEdit?.optimal_temp || '',
    water_needs: cropToEdit?.water_needs || '',
    soil_type: cropToEdit?.soil_type || '',
  });

  const handleChange = (e) => {
    setCrop({ ...crop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cropToEdit) {
      // Update crop
      await cropService.updateCrop(cropToEdit.id, crop);
    } else {
      // Create new crop
      await cropService.createCrop(crop);
    }
    onSuccess(); // Call the parent success callback
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{cropToEdit ? 'Edit Crop' : 'Add New Crop'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Crop Name"
        value={crop.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Crop Type"
        value={crop.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="season"
        placeholder="Season"
        value={crop.season}
        onChange={handleChange}
      />
      <input
        type="number"
        name="growth_time"
        placeholder="Growth Time"
        value={crop.growth_time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="optimal_temp"
        placeholder="Optimal Temperature"
        value={crop.optimal_temp}
        onChange={handleChange}
      />
      <input
        type="number"
        name="water_needs"
        placeholder="Water Needs (L/day)"
        value={crop.water_needs}
        onChange={handleChange}
      />
      <input
        type="text"
        name="soil_type"
        placeholder="Soil Type"
        value={crop.soil_type}
        onChange={handleChange}
      />
      <button type="submit">{cropToEdit ? 'Update Crop' : 'Add Crop'}</button>
    </form>
  );
};

export default CropForm;
