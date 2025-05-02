import React from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

const BlogWidth = () => {
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

            <section class="blog-pg-section section_space">
                <div class="container">
                    <div class="row">
                        <div class="col col-xl-8 offset-xl-2 content">
                            <div class="blog-content">
                                <div class="post format-standard-image">
                                    <div class="entry-media">
                                        <img src="/public/images/blog/img-4.jpg" alt/>
                                        <button>Fashion</button>
                                    </div>
                                    <div class="entry-details">
                                        <div class="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">A wonderful serenity has taken possession of my entire soul evender</a></h3>
                                        <div class="entry-meta">
                                            <ul>
                                                <li><a to="#">5 Mins Read</a></li>
                                                <li><a to="#">10 OCT 2021</a></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <a to="#" class="read-more">Read More <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="post format-quote">
                                    <div class="entry-details">
                                        <div class="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">Should be incapable of drawing a single stroke present moment</a></h3>
                                        <div class="entry-meta">
                                            <ul>
                                                <li><a to="#">5 Mins Read</a></li>
                                                <li><a to="#">10 OCT 2021</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="post format-video">
                                    <div class="entry-media video-holder">
                                        <img src="/public/images/blog/img-5.jpg" alt/>
                                        <button>Lifestyle</button>
                                        <a to="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1" class="video-btn" data-type="iframe">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                                <g id="video-btn" transform="translate(-619 -1700)">
                                                <circle id="Ellipse_11" data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff"/>
                                                <path id="Polygon_3" data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="entry-details">
                                        <div class="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">Strikes the upper surface of the impenetrable foliage of my trees</a></h3>
                                            <div class="entry-meta">
                                            <ul>
                                                <li><a to="#">5 Mins Read</a></li>
                                                <li><a to="#">10 OCT 2021</a></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <a to="#" class="read-more">Read More <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="post format-gallery">
                                    <div class="entry-media">
                                        <div class="post-slider owl-carousel">
                                            <img src="/public/images/blog/img-6.jpg" alt/>
                                            <img src="/public/images/blog/img-5.jpg" alt/>
                                        </div>
                                        <button>Fashion</button>
                                    </div>
                                    <div class="entry-details">
                                        <div class="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">Plants are noticed by me: when I hear the buzz of the little world among the stalks</a></h3>
                                        <div class="entry-meta">
                                            <ul>
                                                <li><a to="#">5 Mins Read</a></li>
                                                <li><a to="#">10 OCT 2021</a></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <a to="#" class="read-more">Read More <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="post format-standard-image">
                                    <div class="entry-media">
                                        <img src="/public/images/blog/img-7.jpg" alt/>
                                        <button>Fashion</button>
                                    </div>
                                    <div class="entry-details">
                                        <div class="author">By: <a to="#">Hendrt</a></div>
                                        <h3><a to="#">Familiar with the countless indescribabl</a></h3>
                                        <div class="entry-meta">
                                            <ul>
                                                <li><a to="#">5 Mins Read</a></li>
                                                <li><a to="#">10 OCT 2021</a></li>
                                            </ul>
                                        </div>
                                        <p>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p>
                                        <a to="#" class="read-more">Read More <i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="pagination-wrapper pagination-wrapper-left">
                                    <ul class="pg-pagination">
                                        <li>
                                            <a to="#" aria-label="Previous">
                                                <i class="fal fa-long-arrow-left"></i>
                                            </a>
                                        </li>
                                        <li class="active"><a to="#">1</a></li>
                                        <li><a to="#">2</a></li>
                                        <li><a to="#">3</a></li>
                                        <li><a to="#" aria-label="Next"><i class="fal fa-long-arrow-right"></i></a></li>
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

export default BlogWidth;