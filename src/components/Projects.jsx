import { useState } from 'react';
import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categories = ['all', 'Professional', 'Academic', 'AI', 'ML', 'Web Dev'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project =>
            project.category === filter || project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        );

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title">
                    <h2>Projects</h2>
                    <p className="section-subtitle">Some of my notable work</p>
                </div>

                <div className="projects-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {project.featured && (
                                <div className="featured-badge">
                                    <FiStar /> Featured
                                </div>
                            )}

                            <div className="project-header">
                                <h3 className="project-name">{project.name}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="badge">{tag}</span>
                                ))}
                            </div>

                            <div className="project-footer">
                                <div className="project-tech">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="tech-badge badge-gradient">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="tech-more">+{project.technologies.length - 3}</span>
                                    )}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FiGithub />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FiExternalLink />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
