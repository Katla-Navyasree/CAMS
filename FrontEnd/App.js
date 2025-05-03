import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CropManagement from './pages/CropManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/crops" element={<CropManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
