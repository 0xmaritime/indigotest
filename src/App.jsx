import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTask from './pages/MainTask';
import SolutionPage from './pages/SolutionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTask />} />
        <Route path="/solution" element={<SolutionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
