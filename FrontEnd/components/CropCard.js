import React from 'react';

const CropCard = ({ crop }) => {
  return (
    <div className="crop-card">
      <h3>{crop.name}</h3>
      <p>Type: {crop.type}</p>
      <p>Season: {crop.season}</p>
      <p>Growth Time: {crop.growth_time} days</p>
      <p>Optimal Temp: {crop.optimal_temp} °C</p>
      <p>Water Needs: {crop.water_needs} L/day</p>
      <p>Soil Type: {crop.soil_type}</p>
    </div>
  );
};

export default CropCard;
