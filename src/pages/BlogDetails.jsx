import React from 'react';
import Base from './Base';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    return (
        <Base>
            <div class="breadcrumb_section">
                <div class="container">
                    <ul class="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>Blog Standard</li>
                    </ul>
                </div>
            </div>

            <section className="blog-single-section section_space">
            <div className="container">
                <div className="row">
                {/* Blog Content */}
                <div className="col-lg-8 col-md-12 content">
                    <div className="blog-content">
                    <div className="post format-standard-image">
                        <div className="entry-media">
                        <img src="/public/images/blog/img-4.jpg" alt="Blog" />
                        <button>Fashion</button>
                        </div>
                        <div className="entry-details">
                        <div className="author">
                            By: <Link to="#">Morten</Link>
                        </div>
                        <h2>
                            A wonderful serenity has taken possession of my entire soul
                            evender
                        </h2>
                        <div className="entry-meta">
                            <ul>
                            <li>
                                <Link to="#">5 Mins Read</Link>
                            </li>
                            <li>
                                <Link to="#">24 May 2021</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        When Gregor Samsa woke from troubled dreams, he found himself
                        transformed in his bed into a horrible vermin...
                        </p>
                        <blockquote>
                        Found himself transformed in his bed into a horrible vermin.
                        He lay on his armour-like back, and if he lifted his head a
                        little he could see his brown belly
                        <span>- Vhone Michel</span>
                        </blockquote>
                    </div>

                    {/* Share Section */}
                    <div className="share">
                        <i className="fas fa-share-alt-square"></i>
                        <ul>
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Twitter</Link>
                        </li>
                        <li>
                            <Link to="#">Pinterest</Link>
                        </li>
                        <li>
                            <Link to="#">Instagram</Link>
                        </li>
                        </ul>
                    </div>

                    {/* Author Box */}
                    <div className="author-box">
                        <div className="author-avatar">
                        <Link to="#" target="_blank">
                            <img src="/public/images/blog-details/author.jpg" alt="Author" />
                        </Link>
                        </div>
                        <div className="author-content">
                        <Link to="#" className="author-name">
                            Author: Vhone
                        </Link>
                        <p>
                            Pitifully thin compared with the size of the rest of him,
                            waved about helplessly...
                        </p>
                        <div className="socials">
                            <ul className="social-link">
                            <li>
                                <Link to="#">
                                <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="comments-area">
                        <div className="comments-section">
                        <h3 className="comments-title">3 Comments</h3>
                        <ol className="comments">
                            <li className="comment">
                            <div className="comment-theme">
                                <div className="comment-image">
                                <img src="/public/images/blog-details/comments-author/img-1.jpg" alt="Commenter" />
                                </div>
                            </div>
                            <div className="comment-main-area">
                                <div className="comment-wrapper">
                                <div className="comments-meta">
                                    <h4>
                                    Diler <span className="comments-date">Sep 25, 2021 at 3:00 PM</span>
                                    </h4>
                                </div>
                                <div className="comment-area">
                                    <p>
                                    Samsa was a travelling salesman above it there
                                    hung a picture...
                                    </p>
                                    <div className="comments-reply">
                                    <Link className="comment-reply-link" to="#">
                                        <span>Reply</span>
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </li>
                        </ol>
                        </div>

                        {/* Comment Form */}
                        <div className="comment-respond">
                        <h3 className="comment-reply-title">Leave your thought</h3>
                        <form method="post" className="comment-form">
                            <div className="form-textarea">
                            <textarea placeholder="Write Your Comments..."></textarea>
                            </div>
                            <div className="form-inputs">
                            <input placeholder="Website" type="url" />
                            <input placeholder="Name" type="text" />
                            <input placeholder="Email" type="email" />
                            </div>
                            <div className="form-submit">
                            <input value="Post Comment" type="submit" />
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className="col-lg-4 col-md-12">
                    <div className="blog-sidebar-s2">
                    <div className="widget search-widget">
                        <h3>Search</h3>
                        <form>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit">
                            <i className="ti-search"></i>
                            </button>
                        </div>
                        </form>
                    </div>

                    {/* Recent Posts */}
                    <div className="widget recent-post-widget">
                        <h3>Recent Posts</h3>
                        <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                            <img src="/public/images/recent-posts/img-1.jpg" alt="Recent Post" />
                            </div>
                            <div className="details">
                            <span className="date">10 OCT 2021</span>
                            <h4>
                                <Link to="#">Plants are noticed by me when I hear the buzz...</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Advertise Section */}
                    <div className="widget add-widget">
                        <h3>Advertise</h3>
                        <div className="img-holder">
                        <img src="/public/images/blog/sidebar-add-bg.jpg" alt="Advertisement" />
                        </div>
                        <div className="details">
                        <h4>
                            World among the stalks, and grow familiar with the countless indescribabl
                        </h4>
                        <Link to="#" className="btn btn_primary">
                            See more
                        </Link>
                        </div>
                    </div>

                    {/* Tags Section */}
                    <div className="widget tag-widget">
                        <h3>Tags</h3>
                        <ul>
                        <li>
                            <Link to="#">Ecommerce</Link>
                        </li>
                        <li>
                            <Link to="#">Fashion</Link>
                        </li>
                        <li>
                            <Link to="#">T-shirt</Link>
                        </li>
                        <li>
                            <Link to="#">Furnitures</Link>
                        </li>
                        <li>
                            <Link to="#">Medical</Link>
                        </li>
                        <li>
                            <Link to="#">Baby</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </Base>
    );
};

export default BlogDetails;