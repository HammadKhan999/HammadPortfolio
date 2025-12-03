import { skills } from '../data/portfolio';
import './TechStack.css';

const TechStack = () => {
    // Flatten all skills into a single array with categories
    const allSkills = Object.entries(skills).flatMap(([category, skillList]) =>
        skillList.map(skill => ({ name: skill, category }))
    );

    return (
        <section id="techstack" className="section tech-stack">
            <div className="container">
                <div className="section-title">
                    <h2>Tech Stack</h2>
                    <p className="section-subtitle">Complete overview of my technical toolkit</p>
                </div>

                <div className="tech-cloud">
                    {allSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="tech-bubble"
                            style={{
                                animationDelay: `${index * 0.02}s`,
                            }}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>

                <div className="tech-categories">
                    {Object.keys(skills).map((category, index) => (
                        <div
                            key={category}
                            className="category-pill"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="category-count">{skills[category].length}</span>
                            <span className="category-label">{category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
