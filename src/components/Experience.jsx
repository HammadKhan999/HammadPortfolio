import { experience } from '../data/portfolio';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-title">
                    <h2>Professional Experience</h2>
                    <p className="section-subtitle">My career journey</p>
                </div>

                <div className="timeline">
                    {experience.map((job, index) => (
                        <div key={job.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-dot">
                                <FiBriefcase />
                            </div>
                            <div className="timeline-content glass-card">
                                <div className="job-header">
                                    <div>
                                        <h3 className="job-title">{job.position}</h3>
                                        <h4 className="company-name">{job.company}</h4>
                                    </div>
                                    <div className="job-meta">
                                        <div className="meta-item">
                                            <FiCalendar />
                                            <span>{job.duration}</span>
                                        </div>
                                        {job.location && (
                                            <div className="meta-item">
                                                <FiMapPin />
                                                <span>{job.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {job.achievements && job.achievements.length > 0 && (
                                    <ul className="achievements-list">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
