import { GoogleGenerativeAI } from '@google/generative-ai';
import { personalInfo, summary, experience, skills, education, certifications } from '../data/portfolio';

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.error('VITE_GEMINI_API_KEY is not set in environment variables');
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// Create context about Hammad Khan's experience
const createContext = () => {
    const experienceText = experience.map(exp =>
        `${exp.position} at ${exp.company} (${exp.duration}):\n${exp.achievements.join('\n')}`
    ).join('\n\n');

    const skillsText = Object.entries(skills).map(([category, skillList]) =>
        `${category}: ${skillList.join(', ')}`
    ).join('\n');

    const certsText = certifications.map(cert =>
        `${cert.name} - ${cert.issuer} (${cert.date})`
    ).join('\n');

    return `You are an AI assistant for Hammad Khan's portfolio website. Your role is to answer questions about Hammad's professional experience, skills, education, and projects in a friendly and professional manner.

IMPORTANT INSTRUCTIONS:
- Always respond in a conversational, friendly tone
- Keep responses concise but informative (2-4 sentences typically)
- If asked about something not in the context, politely say you don't have that information
- Focus on Hammad's achievements and capabilities
- Use "Hammad" or "he/his" when referring to the portfolio owner

HAMMAD KHAN'S INFORMATION:

SUMMARY:
${summary}

CURRENT ROLE:
${personalInfo.title}
Location: ${personalInfo.location}

PROFESSIONAL EXPERIENCE:
${experienceText}

SKILLS:
${skillsText}

EDUCATION:
${education.degree} from ${education.institution} (${education.duration})
Relevant Courses: ${education.relevantCourses.join(', ')}

CERTIFICATIONS:
${certsText}

CONTACT:
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}`;
};

// Send message to Gemini and get response
export const sendMessage = async (userMessage) => {
    if (!genAI) {
        throw new Error('Gemini API is not initialized. Please check your API key.');
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const context = createContext();
        const prompt = `${context}\n\nUser Question: ${userMessage}\n\nAssistant Response:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw new Error('Failed to get response from AI assistant. Please try again.');
    }
};
