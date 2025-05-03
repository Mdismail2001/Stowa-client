import React from 'react';
import { Link } from 'react-router-dom';

const BrandSection = () => {
    return (
        <div class="brand_section pb-0">
        <div class="container">
            <div class="brand_carousel">
                <div class="slider_item">
                    <Link class="product_brand_logo" href="#!">
                        <img src="/public/images/brand/brand_1.png" alt="image_not_found"/>
                        <img src="/public/images/brand/brand_1.png" alt="image_not_found"/>
                    </Link>
                </div>
                <div class="slider_item">
                    <Link class="product_brand_logo" href="#!">
                        <img src="/public/images/brand/brand_2.png" alt="image_not_found"/>
                        <img src="/public/images/brand/brand_2.png" alt="image_not_found"/>
                    </Link>
                </div>
                <div class="slider_item">
                    <Link class="product_brand_logo" href="#!">
                        <img src="/public/images/brand/brand_3.png" alt="image_not_found"/>
                        <img src="/public/images/brand/brand_3.png" alt="image_not_found"/>
                    </Link>
                </div>
                <div class="slider_item">
                    <Link class="product_brand_logo" href="#!">
                        <img src="/public/images/brand/brand_4.png" alt="image_not_found"/>
                        <img src="/public/images/brand/brand_4.png" alt="image_not_found"/>
                    </Link>
                </div>
                <div class="slider_item">
                    <Link class="product_brand_logo" href="#!">
                        <img src="/public/images/brand/brand_5.png" alt="image_not_found"/>
                        <img src="/public/images/brand/brand_5.png" alt="image_not_found"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
};

export default BrandSection;