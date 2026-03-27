import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import Bills from './pages/Bills';

const App: React.FC = () => {
  function NotFound() {
    console.log('rendering NotFound');
    return <div>Error, Will Robinson!</div>;
  }

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="bills" element={<Bills />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
