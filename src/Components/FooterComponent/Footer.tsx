import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer: React.FC = () => {
    return (
        <div className="footer-gradient">
            <div className="left">
                © 2023 Your Company Name
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

