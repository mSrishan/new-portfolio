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
      text: "Hi there! \ud83d\udc4b I'm Srishan's AI assistant. Ask me anything about his work, skills, or availability!",
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

    const userMessage = input.toLowerCase();
    setMessages((prev) => [...prev, { role: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Great question! Srishan specializes in full-stack development and Generative AI. He works with React, Next.js, FastAPI, and LangChain. Want to know more about his projects?";

      if (userMessage.includes('skill') || userMessage.includes('tech')) {
        botResponse = "Srishan's technical stack includes React.js, Next.js, TypeScript, FastAPI, Spring Boot, Python, and he's deeply experienced with AI technologies like RAG, LangChain, LLMs, NLP, and vector databases (Qdrant, FAISS). \ud83d\ude80";
      } else if (userMessage.includes('contact') || userMessage.includes('hire') || userMessage.includes('email')) {
        botResponse = "You can reach Srishan at srishanmandawala@gmail.com or call +94 764398193. He's currently available for new opportunities! \ud83d\udce7";
      } else if (userMessage.includes('project')) {
        botResponse = "Srishan has built amazing projects including HealthDoc AI (medical document intelligence), a Sri Lankan Legal AI Assistant, and a Cross-Language Ad Matching system for his research. Check the Projects section for details! \ud83d\udcbb";
      } else if (userMessage.includes('education') || userMessage.includes('university') || userMessage.includes('degree')) {
        botResponse = "Srishan completed his BSc (Hons) in Computing & Information Systems at Sabaragamuwa University of Sri Lanka (2022-2026). He studied Physical Science at St. Aloysius' College for A/Ls. \ud83c\udf93";
      } else if (userMessage.includes('experience') || userMessage.includes('work') || userMessage.includes('intern')) {
        botResponse = "Srishan worked as a Software Engineer Intern at Global Cloud Media (Pvt) Ltd. in Colombo (Feb-Aug 2025), where he developed ERP systems and commercial websites. \ud83c\udfe2";
      } else if (userMessage.includes('ai') || userMessage.includes('genai') || userMessage.includes('rag')) {
        botResponse = "Srishan is deeply passionate about GenAI! He specializes in RAG (Retrieval-Augmented Generation), LangChain, prompt engineering, and vector databases. His projects HealthDoc AI and Legal AI Assistant both use these technologies. \ud83e\udde0";
      }

      setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[350px] md:w-[400px] max-h-[500px] flex flex-col rounded-2xl shadow-2xl glass-strong overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-cyan-500">
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
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 min-h-[300px] bg-white/95 dark:bg-[#030712]/90">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-none border border-slate-200 dark:border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-white/10 flex gap-2 bg-white/95 dark:bg-[#030712]/90">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, experience..."
              className="flex-grow bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button
              type="submit"
              className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/25 transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-200 dark:bg-slate-800 rotate-90' : 'bg-gradient-to-r from-indigo-600 to-cyan-600 rotate-0'
        }`}
      >
        {isOpen ? <X size={24} className="text-slate-700 dark:text-white" /> : <MessageSquare size={24} className="text-white" />}
      </button>
    </div>
  );
};

export default Chatbot;
