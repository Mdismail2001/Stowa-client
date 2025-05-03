import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section className="products-with-sidebar-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 order-lg-3">
                        <div className="best-selling-products">
                            <div className="sec-title-link">
                                <h3>Best selling</h3>
                                <div className="view-all">
                                    <Link to="#">View all<i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="product-area clearfix">
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product_img_12.png" alt/>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">Macbook Pro</Link></h4>
                                        <p><Link to="#">Apple MacBook Pro13.3″ Laptop with new Touch bar ID </Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product-img-21.png" alt/>
                                        <span className="theme-badge">Sale</span>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">Apple Watch</Link></h4>
                                        <p><Link to="#">Apple Watch Series 7 case Pair any band with cool design</Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product-img-22.png" alt/>
                                        <span className="theme-badge-2">12% off</span>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">Mac Mini</Link></h4>
                                        <p><Link to="#">Apple MacBook Pro13.3″ Laptop with new Touch bar ID </Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                            <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>904.21
                                                    </bdi>
                                                </span>
                                            </del>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product-img-23.png" alt/>
                                        <span className="theme-badge">Sale</span>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">iPad mini</Link></h4>
                                        <p><Link to="#">The ultimate iPad experience all over the world with coll model </Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product-img-24.png" alt/>
                                        <span className="theme-badge-2">25% off</span>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">Imac 29"</Link></h4>
                                        <p><Link to="#">Apple iMac 29″ Laptop with new Touch bar ID for you </Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                            <del aria-hidden="true">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>904.21
                                                    </bdi>
                                                </span>
                                            </del>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="product-pic">
                                        <img src="/public/images/shop/product-img-25.png" alt/>
                                        <div className="actions">
                                            <ul>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link to="#"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"  stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Shuffle</title> <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7"/> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17"/> <path d="M19 4L22 7L19 10"/> <path d="M19 13L22 16L19 19"/> </svg></Link>
                                                </li>
                                                <li>
                                                    <Link className="quickview_btn" data-bs-toggle="modal" href="#quickview_popup" role="button" tabindex="0"><svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title>Visible (eye)</title> <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z"/> <circle cx="12" cy="12" r="3"/> </svg></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="#">iPhone 13</Link></h4>
                                        <p><Link to="#">A dramatically more powerful camera system a display</Link></p>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>471.48
                                                    </bdi>
                                                </span>
                                            </ins>
                                        </span>
                                        <div className="add-cart-area">
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="top_category_wrap">
                            <div className="sec-title-link">
                                <h3>Top categories</h3>
                            </div>
                            <div className="top_category_carousel2" data-slick='{"dots": false}'>
                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_1.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">Men's Watches</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_2.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">iPad</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_3.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">iPhone</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_4.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">Headphone</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_5.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">Mac Mini</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_1.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">Men's Watches</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_2.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">CCTV  Camera</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="slider_item">
                                    <div className="category_boxed">
                                        <Link to="#!">
                                            <span className="item_image">
                                                <img src="/public/images/categories/category_3.png" alt="image_not_found"/>
                                            </span>
                                            <span className="item_title">CCTV  Camera</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel_nav carousel-nav-top-right">
                                <button type="button" className="tc_left_arrow"><i className="fal fa-long-arrow-alt-left"></i></button>
                                <button type="button" className="tc_right_arrow"><i className="fal fa-long-arrow-alt-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 order-lg-9">
                        <div className="product-sidebar">
                            <div className="widget latest_product_carousel">
                                <div className="title_wrap">
                                    <h3 className="area_title">Latest Products</h3>
                                    <div className="carousel_nav">
                                        <button type="button" className="vs4i_left_arrow"><i className="fal fa-angle-left"></i></button>
                                        <button type="button" className="vs4i_right_arrow"><i className="fal fa-angle-right"></i></button>
                                    </div>
                                </div>
                                <div className="vertical_slider_4item" data-slick='{"dots": false}'>
                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_1.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_2.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_3.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_4.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_1.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_2.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_3.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider_item">
                                        <div className="small_product_layout">
                                            <Link className="item_image" href="shop_details.html">
                                                <img src="/public/images/latest_product/latest_product_4.png" alt="image_not_found"/>
                                            </Link>
                                            <div className="item_content">
                                                <h3 className="item_title">
                                                    <Link to="shop_details.html">Product Sample</Link>
                                                </h3>
                                                <ul className="rating_star ul_li">
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                                <div className="item_price">
                                                    <span>$690.99</span>
                                                    <del>$720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget product-add">
                                <div className="product-img">
                                    <img src="/public/images/shop/product_img_10.png" alt/>
                                </div>
                                <div className="details">
                                    <h4>iPad pro</h4>
                                    <p>iPad pro with M1 chipe</p>
                                    <Link className="btn btn_primary" href="#" >Start Buying</Link>
                                </div>
                            </div>
                            <div className="widget audio-widget">
                                <h5>Audio <span>5</span></h5>
                                <ul>
                                    <li><Link to="#">MI headphone</Link></li>
                                    <li><Link to="#">Bluetooth AirPods</Link></li>
                                    <li><Link to="#">Music system</Link></li>
                                    <li><Link to="#">JBL bar 5.1</Link></li>
                                    <li><Link to="#">Edifier Computer Speaker</Link></li>
                                    <li><Link to="#">Macbook pro</Link></li>
                                    <li><Link to="#">Men's watch</Link></li>
                                    <li><Link to="#">Washing metchin</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>

    );
};

export default Products;