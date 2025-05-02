import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../Base';

const Account = () => {
    return (
        <Base>
            <div class="breadcrumb_section">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>My Account</li>
                    </ul>
                </div>
            </div>

            <section className="account_section section_space">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3">
                            <div className="account_menu">
                                <ul className="account_menu_list ul_li_block">
                                    <li className="active"><a to="#!">Account Dashboard</a></li>
                                    <li><Link to="#!">Account Information</Link></li>
                                    <li><Link to="#!">Address Book</Link></li>
                                    <li><Link to="#!">My Orders</Link></li>
                                    <li><Link to="#!">Billing Agreements</Link></li>
                                    <li><Link to="#!">Recurring Profiles</Link></li>
                                    <li><Link to="#!">My Product Reviews</Link></li>
                                    <li><Link to="#!">My Tags</Link></li>
                                    <li><Link to="#!">My Wishlist</Link></li>
                                    <li><Link to="#!">My Applications</Link></li>
                                    <li><Link to="#!">Newsletter Subscriptions</Link></li>
                                    <li><Link to="#!">My Downloadable Products</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-9">
                            <div className="account_content_area">
                                <h3>My Dashboard</h3>
                                <ul className="content_layout ul_li_block">
                                    <li>
                                        <h4><strong>Hello, Elena Velykorodnova!</strong></h4>
                                        <p className="mb-0">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                                    </li>
                                    <li>
                                        <h4>Contact Information</h4>
                                        <p className="mb-0">John Doe</p>
                                        <Link className="mb-3" to="#!">info@example.com</Link>
                                        <ul className="btns_group ul_li">
                                            <li><Link className="btn" to="#!">Edit Account Information</Link></li>
                                            <li><Link className="btn" to="#!">Change Password</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>Newsletter</h4>
                                        <p>You are currently not subscribed to any newsletter. </p>
                                        <Link className="btn" to="#!">Edit Subscription</Link>
                                    </li>
                                    <li>
                                        <h4 className="mb-3">Address Book</h4>
                                        <Link className="btn" to="#!">Manage Addresses</Link>
                                    </li>
                                    <li>
                                        <h4>Default Billing Address</h4>
                                        <p>You have not set a default billing address.</p>
                                        <Link className="btn" to="#!">Edit Address</Link>
                                    </li>
                                    <li>
                                        <h4>Default Shipping Address</h4>
                                        <p>You have not set a default shipping address.</p>
                                        <Link className="btn" to="#!">Edit Address</Link>
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

export default Account;