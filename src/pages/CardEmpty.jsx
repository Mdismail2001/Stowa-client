import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const CardEmpty = () => {
    return (
        <Base>
            <div class="breadcrumb_section">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>Empty Cart</li>
                    </ul>
                </div>
            </div>

            <section className="empty_cart_section section_space">
                <div className="container">
                    <div className="empty_cart_content text-center">
                        <span className="cart_icon">
                            <i className="icon icon-ShoppingCart"></i>
                        </span>
                        <h3>There are no more items in your cart</h3>
                        <Link className="btn btn_secondary" to="index-4.html"><i className="far fa-chevron-left"></i> Continue shopping </Link>
                    </div>
                </div>
            </section>

        </Base>
    );
};

export default CardEmpty;