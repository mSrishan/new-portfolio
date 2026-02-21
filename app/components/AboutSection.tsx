import FadeIn from './FadeIn';
import UserPlaceholder from './UserPlaceholder';
import { MapPin } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative z-20">
            <FadeIn>
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
                    <div className="h-px bg-slate-200 dark:bg-white/10 flex-grow max-w-xs"></div>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn delay={200} direction="right">
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        <p>
                            Hello! My name is Srishan and I enjoy creating things that live on the internet. My
                            interest in software engineering started back in 2018 when I decided to try editing
                            custom Tumblr themes — turns out hacking together HTML &amp; CSS taught me a lot about
                            architecture!
                        </p>
                        <p>
                            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising
                            agency, a start-up, a huge corporation, and a student-led design studio. My main focus
                            these days is building accessible, inclusive products and digital experiences for a
                            variety of clients.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium pt-4">
                            <MapPin size={18} /> Based in Colombo, Sri Lanka
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={400} direction="left" className="relative group">
                    <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl group-hover:border-indigo-500/50 transition-colors duration-500">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-cyan-50 dark:from-indigo-900 dark:via-slate-800 dark:to-cyan-900 opacity-80 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                            <UserPlaceholder />
                        </div>
                    </div>
                    <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-2xl border-2 border-indigo-500/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                </FadeIn>
            </div>
        </section>
    );
};

export default AboutSection;
