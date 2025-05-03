import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/home/Index';
import AboutUs from './pages/about/AboutUs';
import Account from './pages/account/Account';
import BlogDetails from './pages/blog/BlogDetails';
import BlogWidth from './pages/blog/BlogWidth';
import BlogLeftSidebar from './pages/blog/BlogLeftSidebar';
import Blog from './pages/blog/Blog';
import CardEmpty from './pages/card/CardEmpty';
import Card from './pages/card/Card';
import CheckOut from './pages/check/CheckOut';
import Compare from './pages/Compare';
import Contact from './pages/contact/Contact';
import Error from './pages/Error';
import Index2 from './pages/home/Index2';
import Index3 from './pages/home/Index3';
import Index4 from './pages/home/Index4';
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import Ordertracking from './pages/order/Ordertracking';
import ShopDetails from './pages/shop/ShopDetails';
import ShopGrid from './pages/shop/ShopGrid';
import ShopList from './pages/shop/ShopList';
import Team from './pages/Team';
import WishList from './pages/WishList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/blog_details" element={<BlogDetails/>} />
        <Route path="/blog_width" element={<BlogWidth/>} />
        <Route path="/blog_sidebar" element={<BlogLeftSidebar/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/card_empty" element={<CardEmpty/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/compare" element={<Compare/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/index2" element={<Index2/>} />
        <Route path="/index3" element={<Index3/>} />
        <Route path="/index4" element={<Index4/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/order_tracking" element={<Ordertracking/>} />
        <Route path="/shop_details" element={<ShopDetails/>} />
        <Route path="/shop_grid" element={<ShopGrid/>} />
        <Route path="/shop_list" element={<ShopList/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/wish_list" element={<WishList/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
