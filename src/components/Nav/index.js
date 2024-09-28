import React, { useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Nav.scss';

const Nav = () => {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle('show-nav')
    }
    return (
        <Router>
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="#">Logo</Link>
                </div>
                <ul ref={menu}>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>

                <div className="action">
                    <div className="btn" onClick={menuHandler}>
                        <ReorderIcon />
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Nav;
