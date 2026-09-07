import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 border-t border-white/5 bg-[#030712]/50 relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/20">
                S
              </div>
              <span>
                Srishan<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Building AI-powered applications and intelligent digital experiences. Crafting scalable solutions at the intersection of full-stack development and Generative AI.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={18} />, href: 'https://github.com/mSrishan' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/srishan-mandawala-a09193232/' },
                { icon: <Mail size={18} />, href: 'mailto:srishanmandawala@gmail.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-indigo-400 transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Galle, Sri Lanka</li>
              <li>
                <a
                  href="mailto:srishanmandawala@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  srishanmandawala@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94764398193"
                  className="hover:text-indigo-400 transition-colors"
                >
                  +94 764398193
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-mono text-sm">
            &copy; {year} Srishan Mandawala. All rights reserved.
          </p>
          <p className="text-slate-500 font-mono text-sm flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using{' '}
            <span className="text-indigo-400">React</span> &amp;{' '}
            <span className="text-cyan-400">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
