import React from 'react';
import './About.scss';
import images from '~/assets/images';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
    return (
        <div className="about-wrapper section">
            <div className="about-content">
                <small className="section-title">About Us</small>
                <h2>
                    What are your Advantages <br /> Compare to others
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quibusdam ratione ut velit modi, cum, amet
                    repudiandae possimus, accusantium deleniti vitae non
                    voluptatibus natus necessitatibus explicabo quidem sint
                    nesciunt distinctio?
                </p>
                <div className="about-cards">
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Conntact</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            <h3>Easy Booking </h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Conntact</h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                    <div className="about-card">
                        <div className="about-title">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            <h3>Easy Booking </h3>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur x</p>
                    </div>
                </div>
            </div>
            <div className="about-img">
                <img src={images.aboutImg} alt="about img" />
            </div>
        </div>
    );
};

export default AboutPage;
