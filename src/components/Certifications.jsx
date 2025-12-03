import { useState } from 'react';
import { certifications } from '../data/portfolio';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedCerts = showAll ? certifications : certifications.slice(0, 6);

    return (
        <section id="certifications" className="section certifications">
            <div className="container-wide">
                <div className="section-title">
                    <h2>Certifications</h2>
                    <p className="section-subtitle">Professional certifications and credentials</p>
                </div>

                <div className="certs-grid">
                    {displayedCerts.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`cert-card glass-card ${cert.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="cert-header">
                                <FiAward className="cert-icon" />
                                <div className="cert-info">
                                    <h4 className="cert-name">{cert.name}</h4>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>
                            </div>
                            {cert.description && (
                                <p className="cert-description">{cert.description}</p>
                            )}
                            <div className="cert-footer">
                                <span className="cert-date">{cert.date}</span>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {certifications.length > 6 && (
                    <button
                        className="btn btn-outline show-more-btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : `Show All (${certifications.length})`}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Certifications;
