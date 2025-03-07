import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const BlogLeftSidebar = () => {
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

            <section className="blog-pg-section blog-pg-left-sidebar section_space">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 order-lg-4 content">
                            <div className="blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img src="/public/images/blog/img-4.jpg" alt/>
                                        <button>Fashion</button>
                                    </div>
                                    <div className="entry-details">
                                        <div className="author">By: <a to="#">Hendrt</a></div>
                                        <h3><Link to="#">A wonderful serenity has taken possession of my entire soul evender</Link></h3>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="#">5 Mins Read</Link></li>
                                                <li><Link to="#">10 OCT 2021</Link></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <Link to="#" className="read-more">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="post format-quote">
                                    <div className="entry-details">
                                        <div className="author">By: <a to="#">Hendrt</a></div>
                                        <h3><Link to="#">Should be incapable of drawing a single stroke present moment</Link></h3>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="#">5 Mins Read</Link></li>
                                                <li><Link to="#">10 OCT 2021</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="post format-video">
                                    <div className="entry-media video-holder">
                                        <img src="/public/images/blog/img-5.jpg" alt/>
                                        <button>Lifestyle</button>
                                        <Link to="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1" className="video-btn" data-type="iframe">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                                <g id="video-btn" transform="translate(-619 -1700)">
                                                <circle id="Ellipse_11" data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff"/>
                                                <path id="Polygon_3" data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)"/>
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="entry-details">
                                        <div className="author">By: <a to="#">Hendrt</a></div>
                                        <h3><Link to="#">Strikes the upper surface of the impenetrable foliage of my trees</Link></h3>
                                            <div className="entry-meta">
                                            <ul>
                                                <li><Link to="#">5 Mins Read</Link></li>
                                                <li><Link to="#">10 OCT 2021</Link></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <Link to="#" className="read-more">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="post format-gallery">
                                    <div className="entry-media">
                                        <div className="post-slider owl-carousel">
                                            <img src="/public/images/blog/img-6.jpg" alt/>
                                            <img src="/public/images/blog/img-5.jpg" alt/>
                                        </div>
                                        <button>Fashion</button>
                                    </div>
                                    <div className="entry-details">
                                        <div className="author">By: <a to="#">Hendrt</a></div>
                                        <h3><Link to="#">Plants are noticed by me: when I hear the buzz of the little world among the stalks</Link></h3>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="#">5 Mins Read</Link></li>
                                                <li><Link to="#">10 OCT 2021</Link></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <Link to="#" className="read-more">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img src="/public/images/blog/img-7.jpg" alt/>
                                        <button>Fashion</button>
                                    </div>
                                    <div className="entry-details">
                                        <div className="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">Familiar with the countless indescribabl</a></h3>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><Link to="#">5 Mins Read</Link></li>
                                                <li><Link to="#">10 OCT 2021</Link></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <Link to="#" className="read-more">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="pagination-wrapper pagination-wrapper-left">
                                    <ul className="pg-pagination">
                                        <li>
                                            <Link to="#" aria-label="Previous">
                                                <i className="fal fa-long-arrow-left"></i>
                                            </Link>
                                        </li>
                                        <li className="active"><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#" aria-label="Next"><i className="fal fa-long-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-4 order-lg-8">
                            <div className="blog-sidebar-s2">
                                <div className="widget search-widget">
                                    <h3>Search</h3>
                                    <form>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search Post.."/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="widget recent-post-widget">
                                    <h3>Recent post</h3>
                                    <div className="posts">
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src="/public/images/recent-posts/img-1.jpg" alt/>
                                            </div>
                                            <div className="details">
                                                <span className="date">10 OCT 2021</span>
                                                <h4><Link to="#">Plants are noticed by me when I hear the buzz of the little</Link></h4>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src="/public/images/recent-posts/img-2.jpg" alt/>
                                            </div>
                                            <div className="details">
                                                <span className="date">10 OCT 2021</span>
                                                <h4><Link to="#">Familiar with the countless indescribabl</Link></h4>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="img-holder">
                                                <img src="/public/images/recent-posts/img-3.jpg" alt/>
                                            </div>
                                            <div className="details">
                                                <span className="date">10 OCT 2021</span>
                                                <h4><Link to="#">World among the stalks and grow familiar with</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget add-widget">
                                    <h3>Advertise</h3>
                                    <div>
                                        <div className="img-holder">
                                            <img src="/public/images/blog/sidebar-add-bg.jpg" alt/>
                                        </div>
                                        <div className="details">
                                            <h4>World among the stalks, and grow familiar with the countless indescribabl</h4>
                                            <Link to="#" className="btn btn_primary">See more</Link>
                                        </div>      
                                    </div>
                                </div> 

                                <div className="widget tag-widget">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><Link to="#">Ecommerce</Link></li>
                                        <li><Link to="#">Fashion</Link></li>
                                        <li><Link to="#">T-shirt</Link></li>
                                        <li><Link to="#">Furnitures</Link></li>
                                        <li><Link to="#">Medical</Link></li>
                                        <li><Link to="#">Baby</Link></li>
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

export default BlogLeftSidebar;