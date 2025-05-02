import React from 'react';
import Base from '../Base';
import ProductsSlider from '../../pertials/ProductsSlider'; 
import Policy from '../../pertials/Policy';   
import Products from '../../pertials/Products';
import Promotion from '../../pertials/Promotion';
import NewArrivalProducts from '../../pertials/NewArrivalProducts';
import BrandSection from '../../pertials/BrandSection';
import RecentlyViewProducts from '../../pertials/RecentlyViewProducts';

const Index = () => {
    return (
        <Base>
            <ProductsSlider/>
            <Policy/>
            <Products/>
            <Promotion/>
            <NewArrivalProducts/>
            <BrandSection/>
            <RecentlyViewProducts/>
        </Base>        
    );
};

export default Index;