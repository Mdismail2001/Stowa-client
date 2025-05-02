import React from 'react';
import Base from './Base';
import { Link } from 'react-router-dom';

const WishList = () => {
    return (
        <Base>
            <div className="breadcrumb_section">
                <div className="container">
                    <ul className="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>Wishlist</li>
                    </ul>
                </div>
            </div>

            <section className="cart_section section_space">
                <div className="container">
                    <div className="cart_table">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th className="text-center">PRICE</th>
                                    <th className="text-center">STOCK STATUS</th>
                                    <th className="text-center">ADD TO CART</th>
                                    <th className="text-center">REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cart_product">
                                            <img src="/public/images/compare/compare_img_1.jpg" alt="image_not_found" />
                                            <h3>Your Product Title Here</h3>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center"><span className="price_text text-success">In Stock</span></td>
                                    <td className="text-center">
                                        <a to="#!" className="btn btn_primary">Add To Cart</a>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="cart_product">
                                            <img src="/public/images/compare/compare_img_2.jpg" alt="image_not_found" />
                                            <h3>Your Product Title Here</h3>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center"><span className="price_text text-danger">Out Stock</span></td>
                                    <td className="text-center">
                                        <Link to="#!" className="btn btn_primary">Add To Cart</Link>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="cart_product">
                                            <img src="/public/images/compare/compare_img_3.jpg" alt="image_not_found" />
                                            <h3>Your Product Title Here</h3>
                                        </div>
                                    </td>
                                    <td className="text-center"><span className="price_text">$10.50</span></td>
                                    <td className="text-center"><span className="price_text text-success">In Stock</span></td>
                                    <td className="text-center">
                                        <Link to="#!" className="btn btn_primary">Add To Cart</Link>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Base>
    );
};

export default WishList;