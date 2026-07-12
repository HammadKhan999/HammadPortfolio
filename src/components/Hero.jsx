import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown, FiMessageCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import portfolioImg from '../assets/portfolio.png';
import './Hero.css';

const PHRASES = [
    'AI/ML Engineer',
    'Data Scientist',
    'Data Engineer',
];

const WaveIcon = () => (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wave-icon">
        <path d="M7 11.5V14c0 1.66 1.34 3 3 3h0c1.66 0 3-1.34 3-3v-2.5" />
        <path d="M10 8.5V11c0 1.66 1.34 3 3 3h0c1.66 0 3-1.34 3-3V8.5" />
        <path d="M13 5.5V8c0 1.66 1.34 3 3 3h0c1.66 0 3-1.34 3-3V5.5" />
        <path d="M4 15c.83 0 1.5-.67 1.5-1.5 0-.28-.11-.53-.29-.71L4 12.5" />
    </svg>
);

const Hero = ({ onOpenChat }) => {
    const [typedText, setTypedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        const currentPhrase = PHRASES[currentPhraseIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && typedText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
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
        const element = document.getElementById('about');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-inner">
                    <div className="hero-content animate-fadeIn">
                        <div className="hero-greeting">
                            <WaveIcon /> Hi, I'm
                        </div>

                        <h1 className="hero-name">
                            {personalInfo.name}
                        </h1>

                        <div className="hero-title">
                            <div className="typing-container">
                                <span className="typed-text">{typedText}</span>
                                <span className="cursor" aria-hidden="true">|</span>
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

                    <div className="hero-image-wrapper animate-fadeIn">
                        <div className="hero-image-ring">
                            <img
                                src={portfolioImg}
                                alt="Hammad Khan"
                                className="hero-image"
                            />
                        </div>
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
