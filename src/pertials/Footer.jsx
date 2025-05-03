import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer_section">
            <div class="footer_widget_area">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-4 col-md-6 col-sm-6">
                            <div class="footer_widget footer_about">
                                <div class="brand_logo">
                                    <a class="brand_link" to="index-2.html">
                                        <img src="/public/images/logo/logo_1x.png" srcset="/public/images/logo/logo_2x.png 2x" alt="logo_not_found"/>
                                    </a>
                                </div>
                                <ul class="social_round ul_li">
                                    <li><Link to="#!"><i class="icofont-youtube-play"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-instagram"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-twitter"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-facebook"></i></Link></li>
                                    <li><Link to="#!"><i class="icofont-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-lg-2 col-md-3 col-sm-6">
                            <div class="footer_widget footer_useful_links">
                                <h3 class="footer_widget_title text-uppercase">Quick Links</h3>
                                <ul class="ul_li_block">
                                    <li><Link to="about.html">About Us</Link></li>
                                    <li><Link to="contact.html">Contact Us</Link></li>
                                    <li><Link to="shop.html">Products</Link></li>
                                    <li><Link to="login.html">Login</Link></li>
                                    <li><Link to="register.html">Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-lg-2 col-md-3 col-sm-6">
                            <div class="footer_widget footer_useful_links">
                                <h3 class="footer_widget_title text-uppercase">Custom area</h3>
                                <ul class="ul_li_block">
                                    <li><Link to="#!">My Account</Link></li>
                                    <li><Link to="#!">Orders</Link></li>
                                    <li><Link to="#!">Tracking List</Link></li>
                                    <li><Link to="#!">Tearm</Link></li>
                                    <li><Link to="#!">Privacy Policy</Link></li>
                                    <li><Link to="#!">My Cart</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-lg-4 col-md-6 col-sm-6">
                            <div class="footer_widget footer_contact">
                                <h3 class="footer_widget_title text-uppercase">Contact Onfo</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <div class="hotline_wrap">
                                    <div class="footer_hotline">
                                        <div class="item_icon">
                                            <i class="icofont-headphone-alt"></i>
                                        </div>
                                        <div class="item_content">
                                            <h4 class="item_title">Have any question?</h4>
                                            <span class="hotline_number">+ 123 456 7890</span>
                                        </div>
                                    </div>
                                    <div class="livechat_btn clearfix">
                                        <a class="btn border_primary" to="#!">Live Chat</a>
                                    </div>
                                </div>
                                <ul class="store_btns_group ul_li">
                                    <li><Link to="#!"><img src="/public/images/app_store.png" alt="app_store"/></Link></li>
                                    <li><Link to="#!"><img src="/public/images/play_store.png" alt="play_store"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col col-md-6">
                            <p class="copyright_text">
                                ©2021 <Link to="#!">stowaa</Link>. All Rights Reserved.
                            </p>
                        </div>

                        <div class="col col-md-6">
                            <div class="payment_method">
                                <h4>Payment:</h4>
                                <img src="/public/images/payments_icon.png" alt="image_not_found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;