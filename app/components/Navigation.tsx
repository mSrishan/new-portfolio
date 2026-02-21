import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    isScrolled: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (value: boolean) => void;
    scrollToSection: (id: string) => void;
    navLinks: string[];
}

const Navigation = ({
    isDarkMode,
    setIsDarkMode,
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    scrollToSection,
    navLinks,
}: NavigationProps) => {
    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-[#030712]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4 shadow-sm dark:shadow-none'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter cursor-pointer flex items-center gap-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        S
                    </div>
                    <span>
                        Srishan<span className="text-indigo-500 dark:text-indigo-400">.</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollToSection(link.toLowerCase())}
                            className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                        >
                            {link}
                        </button>
                    ))}

                    <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white/5 dark:hover:bg-white/10 border border-transparent dark:border-white/10 transition-all hover:scale-105"
                        >
                            Resume
                        </button>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        className="text-slate-800 dark:text-slate-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollToSection(link.toLowerCase())}
                            className="text-left py-2 text-lg text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-slate-100 dark:border-white/5"
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
