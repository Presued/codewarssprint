import React from 'react';
import './Header.css';
import logo from '../../assets/images/CodeReserve.png';

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <div className="header-gradient"></div>
        </div>
    );
};

export default Header;
