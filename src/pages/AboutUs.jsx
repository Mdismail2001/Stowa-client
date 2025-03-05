import React from 'react';
import Base from './Base';

const AboutUs = () => {
    return (
        <Base>
            <section class="about_section section_space">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col col-md-6 order-last">
                            <div class="about_image">
                                <img src="/public/images/about/about_image.jpg" alt="image_not_found"/>
                            </div>
                        </div>
                        <div class="col col-md-6">
                            <div class="about_content">
                                <h2 class="about_small_title text-uppercase">Comnay History</h2>
                                <h3 class="about_title">Electro is a clean, modern, user friendly, responsive</h3>
                                <p>
                                    Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
                                </p>
                                <ul class="counter_wrap ul_li">
                                    <li>
                                        <span class="counter">12</span>
                                        <small>Years Experience</small>
                                    </li>
                                    <li>
                                        <span><strong class="counter">10</strong>K</span>
                                        <small>Happy Customers</small>
                                    </li>
                                    <li>
                                        <span><strong class="counter">100</strong>%</span>
                                        <small>Clients Satisfaction</small>
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

export default AboutUs;
