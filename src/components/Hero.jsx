import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown, FiMessageCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const Hero = ({ onOpenChat }) => {
    const [typedText, setTypedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [
        'Data Science Engineer',
        'ML/AI Developer',
        'MLOps Specialist',
        'Full Stack Developer',
    ];

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && typedText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            } else {
                setTypedText(
                    isDeleting
                        ? currentPhrase.substring(0, typedText.length - 1)
                        : currentPhrase.substring(0, typedText.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentPhraseIndex]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content animate-fadeIn">
                    <div className="hero-greeting">
                        <span className="wave">👋</span> Hi, I'm
                    </div>

                    <h1 className="hero-name">
                        {personalInfo.name}
                    </h1>

                    <div className="hero-title">
                        <span className="title-prefix">Acting Lead -</span>
                        <div className="typing-container">
                            <span className="typed-text">{typedText}</span>
                            <span className="cursor">|</span>
                        </div>
                    </div>

                    <p className="hero-description">
                        Passionate about leveraging <span className="highlight">ML/AI</span>, {' '}
                        <span className="highlight">data engineering</span>, and{' '}
                        <span className="highlight">automation</span> to solve complex problems
                        and drive data-driven decision-making.
                    </p>

                    <div className="hero-cta">
                        <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                            <FiMail /> Get In Touch
                        </a>
                        <button onClick={onOpenChat} className="btn btn-outline">
                            <FiMessageCircle /> Ask My Assistant
                        </button>
                    </div>

                    <div className="hero-social">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="social-link"
                            aria-label="Email"
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>
            </div>

            <button
                className="scroll-indicator animate-bounce"
                onClick={scrollToAbout}
                aria-label="Scroll to about section"
            >
                <FiChevronDown />
            </button>
        </section>
    );
};

export default Hero;
