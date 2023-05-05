import React from 'react';
import './HeaderComponent.css'
import logo from '../../assets/CodeReserve.png';
import logout from '../../assets/logout.png';

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