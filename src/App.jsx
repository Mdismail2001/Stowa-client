import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
