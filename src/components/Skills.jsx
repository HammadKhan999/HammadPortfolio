import { useMemo } from 'react';
import { skills } from '../data/portfolio';
import { FiCpu, FiDatabase, FiCode, FiBarChart2, FiCloud, FiSettings, FiSliders } from 'react-icons/fi';
import './Skills.css';

const ICONS = {
    'Machine Learning & AI': <FiCpu />,
    'Data Engineering & Databases': <FiDatabase />,
    'Programming Languages': <FiCode />,
    'Data Analytics & BI': <FiBarChart2 />,
    'Cloud & DevOps': <FiCloud />,
    'Tools & Frameworks': <FiSettings />,
    'Other Skills': <FiSliders />,
};

const CATEGORY_MAP = {
    'Machine Learning & AI': ['Machine Learning & AI'],
    'Data Engineering & Databases': ['Data Engineering', 'Databases'],
    'Programming Languages': ['Programming Languages'],
    'Data Analytics & BI': ['Data Analytics', 'Visualization'],
    'Cloud & DevOps': ['Cloud & DevOps'],
    'Tools & Frameworks': ['Tools & Frameworks'],
    'Other Skills': ['Other'],
};

const Skills = () => {
    const categories = useMemo(() => {
        return Object.entries(CATEGORY_MAP).map(([label, sources]) => {
            const items = [...new Set(sources.flatMap(s => skills[s] || []))];
            return { label, icon: ICONS[label], items };
        });
    }, []);

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                </div>

                <div className="skills-grid">
                    {categories.map(({ label, icon, items }) => (
                        <div key={label} className="skill-category glass-card">
                            <div className="category-header">
                                <span className="category-icon">{icon}</span>
                                <h3 className="category-title">{label}</h3>
                            </div>
                            <div className="skill-chips">
                                {items.map((skill, i) => (
                                    <span key={i} className="skill-chip">{skill}</span>
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
