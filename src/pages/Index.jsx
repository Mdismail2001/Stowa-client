import React from 'react';
import Topheader from '../pertials/Topheader';
import Navbar from '../pertials/Navbar';
import ProductsSlider from '../pertials/ProductsSlider'; 
import Policy from '../pertials/Policy';   
import Products from '../pertials/Products';
import Promotion from '../pertials/Promotion';
import NewArrivalProducts from '../pertials/NewArrivalProducts';
import BrandSection from '../pertials/BrandSection';
import RecentlyViewProducts from '../pertials/RecentlyViewProducts';
import NewsLetter from '../pertials/NewsLetter';
import Footer from '../pertials/Footer';

const Index = () => {
    return (
        <div>
            <Topheader/>
            <Navbar/>
            <ProductsSlider/>
            <Policy/>
            <Products/>
            <Promotion/>
            <NewArrivalProducts/>
            <BrandSection/>
            <RecentlyViewProducts/>
            <NewsLetter/>
            <Footer/>

        </div>
    );
};

export default Index;