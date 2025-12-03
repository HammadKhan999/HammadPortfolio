import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { sendMessage } from '../utils/geminiClient';
import './Chatbot.css';
import './ChatbotMobile.css';

const Chatbot = ({ isOpen, onToggle }) => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Hammad's AI assistant. Feel free to ask me anything about his experience, skills, projects, or background!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setError(null);

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await sendMessage(userMessage);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (err) {
            setError(err.message);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                className={`chat-float-btn ${isOpen ? 'hidden' : ''}`}
                onClick={onToggle}
                aria-label="Open chat"
            >
                <FiMessageCircle />
            </button>

            {/* Chat Window */}
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <div className="header-info">
                        <FiMessageCircle className="header-icon" />
                        <div>
                            <h3>AI Assistant</h3>
                            <p>Ask me about Hammad's experience</p>
                        </div>
                    </div>
                    <button
                        className="close-btn"
                        onClick={onToggle}
                        aria-label="Close chat"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.role}`}
                        >
                            <div className="message-content">
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message assistant">
                            <div className="message-content loading">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about experience, skills, projects..."
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        aria-label="Send message"
                    >
                        <FiSend />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
