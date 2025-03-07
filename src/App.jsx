import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import BlogDetails from './pages/BlogDetails';
import BlogWidth from './pages/BlogWidth';
import BlogLeftSidebar from './pages/BlogLeftSidebar';
import Blog from './pages/Blog';
import CardEmpty from './pages/CardEmpty';
import Card from './pages/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/blog_details" element={<BlogDetails/>} />
        <Route path="/blog_width" element={<BlogWidth/>} />
        <Route path="/blog_sidebar" element={<BlogLeftSidebar/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/card_empty" element={<CardEmpty/>} />
        <Route path="/card" element={<Card/>} />




      </Routes>
    </BrowserRouter>
  );
};
export default App;
