import React, { useState } from 'react';
import CropList from '../components/CropList';
import CropForm from '../components/CropForm';

const CropManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [cropToEdit, setCropToEdit] = useState(null);

  const handleEdit = (crop) => {
    setIsEditing(true);
    setCropToEdit(crop);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCropToEdit(null);
  };

  const handleSuccess = () => {
    setIsEditing(false);
    setCropToEdit(null);
  };

  return (
    <div>
      <h1>Crop Management</h1>
      {isEditing ? (
        <CropForm cropToEdit={cropToEdit} onSuccess={handleSuccess} />
      ) : (
        <div>
          <CropList />
          <button onClick={() => setIsEditing(true)}>Add New Crop</button>
        </div>
      )}
    </div>
  );
};

export default CropManagement;
