import React from 'react';
import './Header.css';
import logo from '../../assets/images/CodeReserve.png';
import logout from '../../assets/images/LogOut.png'

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <img src={logout} alt="logout button" className="logout-button" />
            <div className="header-gradient"></div>
        </div>
    );
};

export default Header;
