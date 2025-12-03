import { education } from '../data/portfolio';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section education">
            <div className="container">
                <div className="section-title">
                    <h2>Education</h2>
                    <p className="section-subtitle">Academic background and qualifications</p>
                </div>

                <div className="education-card glass-card">
                    <div className="education-header">
                        <FiBookOpen className="education-icon" />
                        <div className="education-info">
                            <h3 className="degree-name">{education.degree}</h3>
                            <p className="institution">{education.institution}</p>
                        </div>
                    </div>

                    <div className="education-details">
                        <div className="detail-item">
                            <span className="detail-label">Location:</span>
                            <span className="detail-value">{education.location}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Duration:</span>
                            <span className="detail-value">{education.duration}</span>
                        </div>
                    </div>

                    <div className="relevant-courses">
                        <h4>Relevant Courses</h4>
                        <ul className="courses-list">
                            {education.relevantCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
