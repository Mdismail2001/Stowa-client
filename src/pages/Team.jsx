import React from 'react';
import Base from './Base';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <Base>
            <div className="breadcrumb_section">
                <div className="container">
                    <ul className="breadcrumb_nav ul_li">
                        <li><Link to="/home">Home</Link></li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
            <section className="team_section section_space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-md-7">
                            <div className="team_section_title text-center">
                                <h2 className="title_text">Meet Our Team</h2>
                                <p className="mb-0">
                                    Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence
                                    without revolutionary ROI.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_1.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">Harry Dor</h3>
                                    <span className="team_member_title">CEO/Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_2.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">John Swim</h3>
                                    <span className="team_member_title">Fashion Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_3.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">Harry Dor</h3>
                                    <span className="team_member_title">CEO/Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_4.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">John Swim</h3>
                                    <span className="team_member_title">Fashion Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_5.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">Harry Dor</h3>
                                    <span className="team_member_title">CEO/Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_6.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">John Swim</h3>
                                    <span className="team_member_title">Fashion Designer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_7.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">Harry Dor</h3>
                                    <span className="team_member_title">CEO/Founder</span>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-4 col-sm-6">
                            <div className="team_item">
                                <div className="team_image">
                                    <img src="/public/images/team/team_8.jpg" alt="image_not_found" />
                                </div>
                                <div className="team_content">
                                    <h3 className="team_member_name">John Swim</h3>
                                    <span className="team_member_title">Fashion Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Base>
    );
};

export default Team;