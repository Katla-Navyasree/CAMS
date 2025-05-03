import axios from 'axios';

const API_URL = 'http://localhost:5000/api/crops';

// Get all crops
const getAllCrops = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching crops:', error);
  }
};

// Add a new crop
const createCrop = async (cropData) => {
  try {
    const response = await axios.post(API_URL, cropData);
    return response.data;
  } catch (error) {
    console.error('Error creating crop:', error);
  }
};

// Update a crop
const updateCrop = async (id, cropData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, cropData);
    return response.data;
  } catch (error) {
    console.error('Error updating crop:', error);
  }
};

// Delete a crop
const deleteCrop = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting crop:', error);
  }
};

export default { getAllCrops, createCrop, updateCrop, deleteCrop };
