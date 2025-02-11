import React from 'react';

const Topheader = () => {
    return (
        <div>
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-6">
                            <ul className="header_select_options ul_li">
                                <li>
                                    <div className="select_option">
                                        <div className="flug_wrap">
                                            <img src="assets/images/flug/flug_uk.png" alt="image_not_found"/>
                                        </div>
                                        <select>
                                            <option data-display="Select Option">Select Your Language</option>
                                            <option value="1" selected>English</option>
                                            <option value="2">Bangla</option>
                                            <option value="3" disabled>Arabic</option>
                                            <option value="4">Hebrew</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="select_option">
                                        <h3 className="title_text">Currency:</h3>
                                        <select>
                                            <option data-display="Select Option">Select Your Currency</option>
                                            <option value="united States Dollar" selected>USD</option>
                                            <option value="Armenian Dram">AMD</option>
                                            <option value="Australian Dollar" disabled>AUD</option>
                                            <option value="Austria">EUR</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-md-6">
                            <p className="header_hotline">Call us toll free: <strong>+1888 234 5678</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-3 col-md-3 col-sm-12">
                            <div className="brand_logo">
                                <a className="brand_link" href="index-2.html">
                                    <img src="assets/images/logo/logo_1x.png" srcset="assets/images/logo/logo_2x.png 2x" alt/>
                                </a>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12">
                            <form action="#">
                                <div className="advance_serach">
                                    <div className="select_option mb-0 clearfix">
                                        <select>
                                            <option data-display="All Categories">Select A Category</option>
                                            <option value="1">New Arrival Products</option>
                                            <option value="2">Most Popular Products</option>
                                            <option value="3">Deals of the day</option>
                                            <option value="4">Mobile Accessories</option>
                                            <option value="5">Computer Accessories</option>
                                            <option value="6">Consumer Electronics</option>
                                            <option value="7">Automobiles & Motorcycles</option>
                                        </select>
                                    </div>
                                    <div className="form_item">
                                        <input type="search" name="search" placeholder="Search Prudcts..."/>
                                        <button type="submit" className="search_btn"><i className="far fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-12">
                            <button className="mobile_menu_btn2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fal fa-bars"></i>
                            </button>
                            <button type="button" className="cart_btn">
                                <span className="cart_icon">
                                    <i className="icon icon-ShoppingCart"></i>
                                    <small className="cart_counter">3</small>
                                </span>
                                <span className="cart_amount">$909.00</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topheader;