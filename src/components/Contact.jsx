import { personalInfo } from '../data/portfolio';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's build something amazing together</p>
                </div>

                <div className="contact-content">
                    <div className="contact-card glass-card">
                        <h3 className="contact-title">Let's Connect!</h3>
                        <p className="contact-intro">
                            I'm always open to discussing new opportunities, interesting projects,
                            or just chatting about data science and technology. Feel free to reach out!
                        </p>

                        <div className="contact-info">
                            <a href={`mailto:${personalInfo.email}`} className="contact-item">
                                <div className="contact-icon">
                                    <FiMail />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">{personalInfo.email}</span>
                                </div>
                            </a>

                            <a href={`tel:${personalInfo.phone}`} className="contact-item">
                                <div className="contact-icon">
                                    <FiPhone />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value">{personalInfo.phone}</span>
                                </div>
                            </a>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FiMapPin />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">{personalInfo.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <h4>Find me on</h4>
                            <div className="social-links">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                >
                                    <FiGithub />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                >
                                    <FiLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary btn-lg">
                            <FiSend />
                            Send Me an Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
