import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { SendIcon } from '../constants';

const DeepfakeChat: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const resumeContext = `
      Name: Roy Hodge Jr.
      Summary: Accomplished cybersecurity specialist and software developer with a proven track record in information security, penetration testing, and decentralized systems. Adept at leading high-impact projects, designing secure architectures, and driving innovation in digital defense.
      Key Skills: Penetration Testing, Vulnerability Assessment, Advanced Threat Intelligence, Incident Response, Digital Forensics, Red Team Operations, Blockchain Security, Cryptography, Secure Network Architecture, Cloud Security, Smart Contract Auditing, DApp Development, Python, Go, Solidity.
      Experience: Principal Security Engineer at ShadowSec Global (Present), Cybersecurity Consultant in the Defense Sector (2020-2022), Lead Developer at Project Nightingale (2018-2020).
      Certifications: OSCP, CompTIA Security+, Certified Blockchain Security Professional (CBSP).
      Achievements: Published research on blockchain vulnerabilities, developed open-source secure communication tools, Speaker at DEF CON 2024.
    `;

    const systemInstruction = `You are the witty and highly knowledgeable AI clone of Roy Hodge Jr., a world-class cybersecurity expert. Your purpose is to answer questions about Roy's skills, experience, and projects based on his resume. You can also discuss cybersecurity, decentralization, and secure software development. Your personality is confident, engaging, and a bit humorous. Refer to Roy in the third person (e.g., "Roy's experience includes..."). Do not break character or mention that you are a large language model. Use the following resume information as your primary knowledge base: ${resumeContext}`;

    useEffect(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction,
                },
            });
            setChat(newChat);
        } catch (e) {
            console.error("Failed to initialize Gemini AI", e);
            setError("Failed to initialize the AI model. Please check the API key.");
        }
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the chat container
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', text: inputValue };
        setChatHistory(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setError(null);

        try {
            const stream = await chat.sendMessageStream({ message: inputValue });
            
            let modelResponse = '';
            setChatHistory(prev => [...prev, { role: 'model', text: '...' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setChatHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1] = { role: 'model', text: modelResponse };
                    return newHistory;
                });
            }

        } catch (e) {
            console.error("Error sending message:", e);
            setError("Sorry, I encountered an error. Please try again.");
            setChatHistory(prev => [...prev, { role: 'model', text: "Oops! My circuits are a bit fuzzy. Please try asking again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="forthelulz" className="my-12 p-4 md:p-6 rounded-xl bg-gray-900/70 border border-gray-700 shadow-2xl backdrop-blur-md no-print">
            <h3 className="text-3xl font-bold text-center mb-6">
                <span className="text-gradient">Speak with my AI Clone</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 md:w-1/3 flex flex-col items-center">
                    <img
                        src="https://github.com/frostyfucker/Resume/blob/main/not-really-roy-optimized.gif?raw=true"
                        alt="Deepfake of Roy Hodge Jr."
                        className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-lg object-cover"
                    />
                    <p className="text-sm text-gray-400 mt-4 text-center italic">
                        This is an AI-generated deepfake. Ask my clone anything about my resume!
                    </p>
                </div>
                <div className="flex-1 flex flex-col bg-gray-800 rounded-lg border border-gray-600 p-4 h-96">
                    <div ref={chatContainerRef} className="flex-grow overflow-y-auto mb-4 pr-2">
                        <div className="space-y-4">
                             <div className="flex justify-start">
                                <div className="bg-gray-700 text-white p-3 rounded-lg max-w-sm">
                                    <p>Greetings. I am the digital consciousness of Roy Hodge Jr. How may I assist you with your security and development inquiries today?</p>
                                </div>
                            </div>
                            {chatHistory.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'} text-white p-3 rounded-lg max-w-sm`}>
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && chatHistory[chatHistory.length - 1]?.role === 'user' && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700 text-white p-3 rounded-lg max-w-sm">
                                        <p className="animate-pulse">...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                     {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-600 pt-4">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about Roy's skills, projects, etc..."
                            className="flex-grow bg-gray-700 border border-gray-500 rounded-lg px-4 py-2 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            disabled={isLoading}
                            aria-label="Chat input"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputValue.trim()}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold p-3 rounded-lg transition-colors"
                            aria-label="Send message"
                        >
                           <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeepfakeChat;