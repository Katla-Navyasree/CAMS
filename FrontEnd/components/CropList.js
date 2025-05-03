import React, { useEffect, useState } from 'react';
import cropService from '../services/cropService';
import CropCard from './CropCard';  // Optional: Crop display card

const CropList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      const data = await cropService.getAllCrops();
      setCrops(data);
    };
    fetchCrops();
  }, []);

  return (
    <div>
      <h1>Crop List</h1>
      {crops.length > 0 ? (
        <div className="crop-cards">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      ) : (
        <p>No crops available.</p>
      )}
    </div>
  );
};

export default CropList;
