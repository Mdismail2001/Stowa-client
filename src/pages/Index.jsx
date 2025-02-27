import React from 'react';
import Topheader from '../pertials/Topheader';
import Navbar from '../pertials/Navbar';
import ProductsSlider from '../pertials/ProductsSlider'; 
import Policy from '../pertials/Policy';   
import Products from '../pertials/Products';
import Promotion from '../pertials/Promotion';

const Index = () => {
    return (
        <div>
            <Topheader />
            <Navbar />
            <ProductsSlider />
            <Policy />
            <Products/>
            <Promotion/>
        </div>
    );
};

export default Index;