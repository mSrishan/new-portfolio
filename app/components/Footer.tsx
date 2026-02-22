import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
    scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-8 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#030712]/50 relative z-20">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white">
                                S
                            </div>
                            <span>
                                Srishan<span className="text-indigo-500 dark:text-indigo-400">.</span>
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
                            Building digital products, brands, and experiences. Crafting scalable and performant
                            solutions for the modern web.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <Github size={20} />, href: '#' },
                                { icon: <Linkedin size={20} />, href: '#' },
                                { icon: <Mail size={20} />, href: '#' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase text-sm tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase text-sm tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                            <li>Colombo, Sri Lanka</li>
                            <li>
                                <a
                                    href="mailto:hello@example.com"
                                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    hello@example.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline mt-2"
                                >
                                    View Resume <ExternalLink size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 dark:text-slate-500 font-mono text-sm">
                        © {year} Srishan Mandawala. All rights reserved.
                    </p>
                    {/* <p className="text-slate-500 dark:text-slate-500 font-mono text-sm flex items-center gap-1">
                        Built with <span className="text-indigo-500">React</span> &amp;{' '}
                        <span className="text-cyan-500">Tailwind</span>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
