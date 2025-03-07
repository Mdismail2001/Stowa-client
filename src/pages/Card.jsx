import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const Card = () => {
    return (
        <Base>
            <div class="breadcrumb_section">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>

            <section className="cart_section section_space">
                <div className="container">
                    <div className="cart_update_wrap">
                        <p className="mb-0"><i className="fal fa-check-square"></i> Shipping costs updated.</p>
                    </div>

                    <div className="cart_table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cart_product">
                                            <img src="/public/images/compare/compare_img_1.jpg" alt="image_not_found"/>
                                            <h3><Link to="shop_details.html">Your Product Title Here</Link></h3>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center">
                                        <form action="#">
                                            <div className="quantity_input">
                                                <button type="button" className="input_number_decrement">
                                                    <i className="fal fa-minus"></i>
                                                </button>
                                                <input className="input_number" type="text" value="1" />
                                                <button type="button" className="input_number_increment">
                                                    <i className="fal fa-plus"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center"><button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i></button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="cart_product">
                                            <img src="/public/images/compare/compare_img_2.jpg" alt="image_not_found"/>
                                            <h3><Link to="shop_details.html">Your Product Title Here</Link></h3>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center">
                                        <form action="#">
                                            <div className="quantity_input">
                                                <button type="button" className="input_number_decrement">
                                                    <i className="fal fa-minus"></i>
                                                </button>
                                                <input className="input_number_2" type="text" value="1"/>
                                                <button type="button" className="input_number_increment">
                                                    <i className="fal fa-plus"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center"><button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart_btns_wrap">
                        <div className="row">
                            <div className="col col-lg-6">
                                <form action="#">
                                    <div className="coupon_form form_item mb-0">
                                        <input type="text" name="coupon" placeholder="Coupon Code..."/>
                                        <button type="submit" className="btn btn_dark">Apply Coupon</button>
                                        <div className="info_icon">
                                            <i className="fas fa-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Info Here"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col col-lg-6">
                                <ul className="btns_group ul_li_right">
                                    <li><Link className="btn border_black" to="#!">Update Cart</Link></li>
                                    <li><Link className="btn btn_dark" to="#!">Prceed To Checkout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="calculate_shipping">
                                <h3 className="wrap_title">Calculate Shipping <span className="icon"><i className="far fa-arrow-up"></i></span></h3>
                                <form action="#">
                                    <div className="select_option clearfix">
                                        <select>
                                            <option data-display="Select Your Currency">Select Your Option</option>
                                            <option value="1" selected>United Kingdom (UK)</option>
                                            <option value="2">United Kingdom (UK)</option>
                                            <option value="3">United Kingdom (UK)</option>
                                            <option value="4">United Kingdom (UK)</option>
                                            <option value="5">United Kingdom (UK)</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="form_item">
                                                <input type="text" name="location" placeholder="State / Country"/>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="form_item">
                                                <input type="text" name="postalcode" placeholder="Postcode / ZIP"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn_primary rounded-pill">Update Total</button>
                                </form>
                            </div>
                        </div>

                        <div className="col col-lg-6">
                            <div className="cart_total_table">
                                <h3 className="wrap_title">Cart Totals</h3>
                                <ul className="ul_li_block">
                                    <li>
                                        <span>Cart Subtotal</span>
                                        <span>$52.50</span>
                                    </li>
                                    <li>
                                        <span>Shipping and Handling</span>
                                        <span>Free Shipping</span>
                                    </li>
                                    <li>
                                        <span>Order Total</span>
                                        <span className="total_price">$52.50</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Base>
    );
};

export default Card;