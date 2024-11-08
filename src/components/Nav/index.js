import React, { useRef } from 'react';
import { BrowserRouter as Router, Link , NavLink} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Nav.scss';
import images from '~/assets/images';

const Nav = () => {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle('show-nav');
    };

    return (
            <div className="nav-wrapper">
                <div className="logo">
                    <NavLink to="/">
                        <img
                            style={{ height: 60, width: 90 }}
                            src={images.logo}
                        />
                    </NavLink>
                </div>
                <ul ref={menu}>
                    <li>
                        <NavLink to="/">Giới thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Sản phẩm</NavLink>
                    </li>
                </ul>
                
                <div className="action">
                    <div className="btn" onClick={menuHandler}>
                        <ReorderIcon />
                    </div>
                </div>
                <div className="contact">
                    <span className="title">Liên hệ ngay</span>
                    <span className="phone">0989.401.800</span>
                </div>
            </div>
    );
};

export default Nav;
