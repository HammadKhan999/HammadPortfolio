import { personalInfo } from '../data/portfolio';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h3 className="footer-logo">HK.</h3>
                            <p className="footer-tagline">
                                Crafting data-driven solutions with passion and precision
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#experience">Experience</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                </ul>
                            </div>

                            <div className="footer-section">
                                <h4>Connect</h4>
                                <ul>
                                    <li>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FiLinkedin /> LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                            <FiGithub /> GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${personalInfo.email}`}>Email</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">
                            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                        </p>
                        <p className="built-with">
                            Built with <FiHeart className="heart" /> using React & Vite
                        </p>
                    </div>
                </div>

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FiArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
