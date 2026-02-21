'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, MessageSquare } from 'lucide-react';

interface ChatbotProps {
    isDarkMode: boolean;
}

interface Message {
    role: 'user' | 'bot';
    text: string;
}

const Chatbot = ({ isDarkMode }: ChatbotProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'bot',
            text: "Hi there! I'm Srishan's AI assistant. Ask me anything about his work, skills, or availability!",
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let botResponse =
                "That's a great question! Srishan is specialized in React and Node.js. Would you like to see his projects or download his resume?";

            if (userMessage.toLowerCase().includes('skill')) {
                botResponse =
                    "Srishan's technical arsenal includes React, Next.js, TypeScript, Node.js, and AWS. He's also proficient in UI/UX design!";
            } else if (
                userMessage.toLowerCase().includes('contact') ||
                userMessage.toLowerCase().includes('hire')
            ) {
                botResponse =
                    "You can reach Srishan via the contact form below or email him directly at hello@example.com. He's currently available for new opportunities!";
            }

            setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            {isOpen && (
                <div
                    className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] max-h-[500px] flex flex-col rounded-2xl shadow-2xl border transition-all duration-300 transform origin-bottom-right ${isDarkMode
                            ? 'bg-[#0a0f1e] border-white/10 text-white'
                            : 'bg-white border-slate-200 text-slate-800'
                        }`}
                >
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">Srishan AI</p>
                                <p className="text-[10px] text-white/80 uppercase tracking-widest">Always Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 min-h-[300px]">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-indigo-600 text-white rounded-tr-none'
                                            : isDarkMode
                                                ? 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'
                                                : 'bg-slate-100 text-slate-700 rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div
                                    className={`p-3 rounded-2xl rounded-tl-none flex gap-1 ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'
                                        }`}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className={`flex-grow bg-transparent border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${isDarkMode ? 'border-white/10' : 'border-slate-200'
                                }`}
                        />
                        <button
                            type="submit"
                            className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-indigo-600 rotate-0'
                    } text-white`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
};

export default Chatbot;
