import { useState } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = ['all', ...Object.keys(skills)];

    const getFilteredSkills = () => {
        if (activeCategory === 'all') {
            return Object.entries(skills);
        }
        return [[activeCategory, skills[activeCategory]]];
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                    <p className="section-subtitle">Tools and technologies I work with</p>
                </div>

                <div className="skills-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category === 'all' ? 'All Skills' : category}
                        </button>
                    ))}
                </div>

                <div className="skills-container">
                    {getFilteredSkills().map(([category, skillList], categoryIndex) => (
                        <div key={category} className="skill-category glass-card">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skillList.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skill-item"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
