import React from 'react';
import './Footer.css';
import GitHubIcon from '../../assets/images/github.png';
import LinkedInIcon from '../../assets/images/linkedin.png';
import TwitterIcon from '../../assets/images/twitter.png';



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