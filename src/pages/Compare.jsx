import React from 'react';
import Base from './Base';
import { Link } from 'react-router-dom';

const Compare = () => {
    return (
        <Base>
            <section className="compare_section section_space">
                <div className="container">
                    <div className="compare_table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><h3>Product</h3></td>
                                    <td>
                                        <img src="/public/images/compare/compare_img_1.jpg" alt="image_not_found"/>
                                        <h4>Samsung Galaxy Note IV</h4>
                                    </td>
                                    <td>
                                        <img src="/public/images/compare/compare_img_1.jpg" alt="image_not_found"/>
                                        <h4>Samsung Galaxy Note IV</h4>
                                    </td>
                                    <td>
                                        <img src="/public/images/compare/compare_img_1.jpg" alt="image_not_found"/>
                                        <h4>Samsung Galaxy Note IV</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h3>Description</h3></td>
                                    <td className="text-center">
                                        <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
                                    </td>
                                    <td className="text-center">
                                    <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
                                    </td>
                                    <td className="text-center">
                                        <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h3>Color</h3></td>
                                    <td className="text-center"><h3>Black</h3></td>
                                    <td className="text-center"><h3>Black</h3></td>
                                    <td className="text-center"><h3>Black</h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Stock</h3></td>
                                    <td className="text-center"><h3>In Stock</h3></td>
                                    <td className="text-center"><h3>In Stock</h3></td>
                                    <td className="text-center"><h3>In Stock</h3></td>
                                </tr>
                                <tr>
                                    <td><h3>Add to cart</h3></td>
                                    <td className="text-center"><Link className="btn btn_gray" href="#!">Add To Cart</Link></td>
                                    <td className="text-center"><Link className="btn btn_gray" href="#!">Add To Cart</Link></td>
                                    <td className="text-center"><Link className="btn btn_gray" href="#!">Add To Cart</Link></td>
                                </tr>
                                <tr>
                                    <td><h3>Delete</h3></td>
                                    <td className="text-center"><button className="remove_btn" type="button"><i className="fas fa-trash-alt"></i></button></td>
                                    <td className="text-center"><button className="remove_btn" type="button"><i className="fas fa-trash-alt"></i></button></td>
                                    <td className="text-center"><button className="remove_btn" type="button"><i className="fas fa-trash-alt"></i></button></td>
                                </tr>
                                <tr>
                                    <td><h3>Rating</h3></td>
                                    <td>
                                        <ul className="rating_star ul_li_center">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="rating_star ul_li_center">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="rating_star ul_li_center">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
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

export default Compare;