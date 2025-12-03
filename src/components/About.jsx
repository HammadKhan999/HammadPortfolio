import { useEffect, useRef } from 'react';
import { summary } from '../data/portfolio';
import './About.css';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '2+', label: 'Years Experience' },
        { number: '10+', label: 'Certifications' },
        { number: '25+', label: 'Technologies' },
        { number: '5+', label: 'Major Projects' },
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div ref={aboutRef} className="about-content">
                    <div className="about-text glass-card">
                        <p className="about-summary">{summary}</p>

                        <div className="about-highlights">
                            <h3>What I Do</h3>
                            <ul className="highlights-list">
                                <li>
                                    <span className="highlight-icon">🤖</span>
                                    <div>
                                        <strong>Machine Learning & AI</strong>
                                        <p>Building and deploying ML models, MLOps pipelines, and multi-agent AI systems</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="highlight-icon">📊</span>
                                    <div>
                                        <strong>Data Engineering</strong>
                                        <p>Designing data pipelines, optimizing databases, and automating workflows</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="highlight-icon">💻</span>
                                    <div>
                                        <strong>Full Stack Development</strong>
                                        <p>Creating interactive dashboards, APIs, and web applications</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="highlight-icon">⚡</span>
                                    <div>
                                        <strong>Automation & Optimization</strong>
                                        <p>Streamlining processes, reducing costs, and improving efficiency</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card glass-card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
