import { useState, useEffect } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
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
                                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                                    <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
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
                            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                        </p>
                        <p className="built-with">
                            Built with React &amp; Vite
                        </p>
                    </div>
                </div>

                <button
                    className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
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
