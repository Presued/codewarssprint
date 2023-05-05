import React from 'react';
import './FooterComponent.css';
import GitHubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';



const Footer: React.FC = () => {
    return (
        <div className="footer-gradient">
            <div className="left">
                © 2023 CodeStack Academy Day Class
            </div>
            <div className="right">
                <GitHubIcon />
                <LinkedInIcon />
                <TwitterIcon />
            </div>
        </div>
    );
};

export default Footer;