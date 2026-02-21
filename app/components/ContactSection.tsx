import FadeIn from './FadeIn';

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
            <FadeIn delay={100}>
                <p className="text-indigo-600 dark:text-indigo-400 font-mono mb-4">04. What&apos;s Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Get In Touch
                </h2>
            </FadeIn>

            <FadeIn delay={200}>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                    Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
            </FadeIn>

            <FadeIn delay={300}>
                <a
                    href="mailto:hello@example.com"
                    className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300 shadow-lg shadow-indigo-500/30"
                >
                    Say Hello
                </a>
            </FadeIn>
        </section>
    );
};

export default ContactSection;
