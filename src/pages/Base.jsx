import React from 'react';
import { Link } from 'react-router-dom';

const Base = ({ children }) => {
  return (
    <div>
      {/* Header Section */}
      <div>
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-6">
                            <ul className="header_select_options ul_li">
                                <li>
                                    <div className="select_option">
                                        <div className="flug_wrap">
                                            <img src="/public/images/flug/flug_uk.png" alt="image_not_found"/>
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
                                <Link className="brand_link" to="index-2.html">
                                    <img src="./images/logo/logo_1x.png" srcset="assets/images/logo/logo_2x.png 2x" alt/>
                                </Link>
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

        <div>
            <div className="header_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-3">
                            <div className="allcategories_dropdown">
                                <button className="allcategories_btn" type="button" data-bs-toggle="collapse" data-bs-target="#allcategories_collapse" aria-expanded="false" aria-controls="allcategories_collapse">
                                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" aria-labelledby="statsIconTitle" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000"> <title id="statsIconTitle">Stats</title> <path d="M6 7L15 7M6 12L18 12M6 17L12 17"/> </svg>
                                    Browse categories
                                </button>
                                <div className="allcategories_collapse" id="allcategories_collapse">
                                    <div className="card card-body">
                                        <ul className="allcategories_list ul_li_block">
                                            <li><Link to="shop_grid.html"><i className="icon icon-Starship"></i> New Arrival Products</Link></li>
                                            <li><Link to="shop_list.html"><i className="icon icon-WorldWide"></i> Most Popular Products</Link></li>
                                            <li><Link to="shop_grid.html"><i className="icon icon-Star"></i> Deals of the day</Link></li>
                                            <li><Link to="shop_list.html"><i className="icon icon-Phone"></i> Mobile Accessories</Link></li>
                                            <li><Link to="shop_grid.html"><i className="icon icon-DesktopMonitor"></i> Computer Accessories</Link></li>
                                            <li><Link to="shop_list.html"><i className="icon icon-Bulb"></i> Consumer Electronics</Link></li>
                                            <li><Link to="shop_grid.html"><i className="icon icon-Car"></i> Automobiles & Motorcycles</Link></li>
                                            <li><Link to="shop_list.html"><i className="icon icon-Phone"></i> Mobile Accessories</Link></li>
                                            <li><Link to="shop_grid.html"><i className="icon icon-DesktopMonitor"></i> Computer Accessories</Link></li>
                                            <li><Link to="shop_list.html"><i className="icon icon-Bulb"></i> Consumer Electronics</Link></li>
                                            <li><Link to="shop_grid.html"><i className="icon icon-Car"></i> Automobiles & Motorcycles</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-6">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                                    <button type="button" className="offcanvas_close">
                                        <i className="fal fa-times"></i>
                                    </button>
                                    <ul className="main_menu_list ul_li">
                                        <li className="dropdown">
                                            <Link className="nav-link" to="#" id="shop_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
                                            <ul className="submenu dropdown-menu" aria-labelledby="shop_submenu">
                                                <li><Link to="index-2.html">Home default</Link></li>
                                                <li><Link to="index-3.html">Home style 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link className="nav-link" to="#" id="shop_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>
                                            <ul className="submenu dropdown-menu" aria-labelledby="shop_submenu">
                                                <li><Link to="/shop_grid">Shop Grid</Link></li>
                                                <li><Link to="/shop_list">Shop List</Link></li>
                                                <li><Link to="/shop_details">Shop Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link className="nav-link" to="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Blog </Link>
                                            <ul className="submenu dropdown-menu" aria-labelledby="blog_submenu">
                                                <li><Link to="/blog">Blog Standard</Link></li>
                                                <li><Link to="/blog_sidebar">Blog Left sidebar</Link></li>
                                                <li><Link to="/blog_width">Blog Full width</Link></li>
                                                <li><Link to="/blog_details">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link className="nav-link" to="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Pages </Link>
                                            <ul className="submenu dropdown-menu" aria-labelledby="pages_submenu">
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                                <li><Link to="/account">My Account</Link></li>
                                                <li><Link to="/register">Register</Link></li>
                                                <li className="dropdown">
                                                    <Link to="#" id="cart_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shopping Cart</Link>
                                                    <ul className="submenu dropdown-menu" aria-labelledby="cart_submenu">
                                                        <li><Link to="/card">Cart</Link></li>
                                                        <li><Link to="/card_empty">Cart Empty</Link></li>
                                                        <li><Link to="/checkout">Checkout</Link></li>
                                                        <li><Link to="/compare">Compare</Link></li>
                                                        <li><Link to="/wish_list">Wishlist</Link></li>
                                                        <li><Link to="/order_tracking">Order Tracking</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/error">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="offcanvas_overlay"></div>
                        </div>

                        <div className="col col-md-3">
                            <ul className="header_icons_group ul_li_right">
                                <li>
                                    <Link to="contact.html">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" stroke="#051d43" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="locationIconTitle">Location</title> <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z"/> <circle cx="12" cy="9" r="1"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="compare.html">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" stroke="#051d43" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="rotateIconTitle">Rotate</title> <path d="M22 12l-3 3-3-3"/> <path d="M2 12l3-3 3 3"/> <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22"/> <path d="M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10"/> <path stroke-linecap="round" d="M5 10V9"/> <path stroke-linecap="round" d="M19 15v-1"/> </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="wishlist.html">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" stroke="#051d43" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg>
                                        <span className="wishlist_counter">3</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="account.html">
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" stroke="#051d43" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="personIconTitle">Person</title> <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20"/> </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Middle Content */}
      <main>{children}</main>

      {/* Footer Section */}
        <section className="newsletter_section">
            <div className="container">
                <div className="row align-items-center">
                    <div class="col col-lg-6">
                        <h2 className="newsletter_title text-white">Sign Up for Newsletter </h2>
                        <p>Get E-mail updates about our latest products and special offers.</p>
                    </div>
                    <div className="col col-lg-6">
                        <form action="#!">
                            <div className="newsletter_form">
                                <input type="email" name="email" placeholder="Enter your email address"/>
                                <button type="submit" class="btn btn_secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        <footer className="footer_section">
            <div className="footer_widget_area">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-6">
                            <div className="footer_widget footer_about">
                                <div className="brand_logo">
                                    <a className="brand_link" to="index-2.html">
                                        <img src="/public/images/logo/logo_1x.png" srcset="/public/images/logo/logo_2x.png 2x" alt="logo_not_found"/>
                                    </a>
                                </div>
                                <ul className="social_round ul_li">
                                    <li><Link to="#!"><i class="icofont-youtube-play"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-instagram"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-twitter"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-facebook"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-3 col-sm-6">
                            <div className="footer_widget footer_useful_links">
                                <h3 className="footer_widget_title text-uppercase">Quick Links</h3>
                                <ul className="ul_li_block">
                                    <li><Link to="about.html">About Us</Link></li>
                                    <li><Link to="contact.html">Contact Us</Link></li>
                                    <li><Link to="shop.html">Products</Link></li>
                                    <li><Link to="login.html">Login</Link></li>
                                    <li><Link to="register.html">Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-3 col-sm-6">
                            <div className="footer_widget footer_useful_links">
                                <h3 className="footer_widget_title text-uppercase">Custom area</h3>
                                <ul className="ul_li_block">
                                    <li><Link to="#!">My Account</Link></li>
                                    <li><Link to="#!">Orders</Link></li>
                                    <li><Link to="#!">Tracking List</Link></li>
                                    <li><Link to="#!">Tearm</Link></li>
                                    <li><Link to="#!">Privacy Policy</Link></li>
                                    <li><Link to="#!">My Cart</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-4 col-md-6 col-sm-6">
                            <div className="footer_widget footer_contact">
                                <h3 className="footer_widget_title text-uppercase">Contact Onfo</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <div className="hotline_wrap">
                                    <div className="footer_hotline">
                                        <div className="item_icon">
                                            <i className="icofont-headphone-alt"></i>
                                        </div>
                                        <div className="item_content">
                                            <h4 className="item_title">Have any question?</h4>
                                            <span className="hotline_number">+ 123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="livechat_btn clearfix">
                                        <a className="btn border_primary" to="#!">Live Chat</a>
                                    </div>
                                </div>
                                <ul className="store_btns_group ul_li">
                                    <li><Link to="#!"><img src="/public/images/app_store.png" alt="app_store"/></Link></li>
                                    <li><Link to="#!"><img src="/public/images/play_store.png" alt="play_store"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-md-6">
                            <p className="copyright_text">
                                ©2021 <Link to="#!">stowaa</Link>. All Rights Reserved.
                            </p>
                        </div>

                        <div className="col col-md-6">
                            <div className="payment_method">
                                <h4>Payment:</h4>
                                <img src="/public/images/payments_icon.png" alt="image_not_found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Base;
