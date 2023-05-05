import React from 'react';
import './FooterComponent.css';
import GitHub from '../../assets/githubicon.png';
import LinkedIn from '../../assets/linkedinicon.png';
import Twitter from '../../assets/twittericon.png';



const Footer: React.FC = () => {
    return (
        <div className="footer-gradient">
            <div className="left">
                © 2023 CodeStack Academy Day Class
            </div>
            <div className="right">
                <a href="https://github.com/"><img src={GitHub} alt="Github" /></a>
                <a href="https://www.linkedin.com/"><img src={LinkedIn} alt="Linkedin" /></a>
                <a href="https://twitter.com/"><img src={Twitter} alt="Twitter" /></a>

            </div>
        </div>
    );
};

export default Footer;