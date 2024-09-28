import React from 'react';
import './Header.scss';
import images from '~/assets/images';
function Header() {
    return (
        <div className="header-wrapper section">
            <div className="header-content">
                <h3>Explore Your life</h3>
                <h1>
                    {' '}
                    Enjoy Your life <br /> and Go Explore
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quibusdam ratione ut velit modi, cum, amet
                    repudiandae possimus, accusantium deleniti vitae non
                    voluptatibus natus necessitatibus explicabo quidem sint
                    nesciunt distinctio?
                </p>
            </div>
            <div className="header-img">
                <img src={images.banner} alt='banner image' className='banner-img'/> 
            </div>


        </div>
    );
}

export default Header;
