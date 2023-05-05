import React from 'react';
import '../HeaderComponent/HeaderComponent.css';
import CodeReserve from "../../assets/CodeReserve.png"

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={CodeReserve} alt="logo" className="header-logo" />
            <div className="header-gradient"></div>
        </div>
    );
};

export default Header;