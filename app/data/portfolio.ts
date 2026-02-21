export interface Project {
    title: string;
    description: string;
    tech: string[];
    gradient: string;
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string;
}

export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'] as const;

export const projects: Project[] = [
    {
        title: 'Aura E-Commerce Platform',
        description:
            'A comprehensive headless e-commerce platform built with Next.js and Shopify. Features include dynamic routing, cart management, seamless checkout integration, and an optimized image delivery pipeline.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Shopify Storefront API'],
        gradient: 'from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-900',
    },
    {
        title: 'FinDash Analytics',
        description:
            'A real-time financial dashboard displaying live market data, interactive charting using D3.js, and personalized user portfolios. Implemented WebSockets for zero-latency updates.',
        tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Socket.io'],
        gradient: 'from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-900',
    },
    {
        title: 'Nova AI Task Manager',
        description:
            "An intelligent productivity app that uses OpenAI's API to auto-categorize tasks, estimate completion times, and suggest daily schedules based on user habits and historical data.",
        tech: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
        gradient: 'from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-900',
    },
];

export const experiences: Experience[] = [
    {
        role: 'Senior Software Engineer',
        company: 'TechNova Solutions',
        duration: '2021 - Present',
        description:
            'Lead the frontend team in developing scalable web applications. Architected a micro-frontend solution that reduced load times by 40%. Mentored junior developers and established CI/CD best practices.',
    },
    {
        role: 'Full Stack Developer',
        company: 'Creative Digital Agency',
        duration: '2019 - 2021',
        description:
            'Developed and maintained custom web applications for various high-profile clients. Integrated headless CMS solutions (Sanity/Contentful) with modern React frameworks.',
    },
    {
        role: 'Frontend Developer Intern',
        company: 'Startup Hub',
        duration: '2018 - 2019',
        description:
            'Assisted in building responsive landing pages, squashing UI bugs, and implementing accessibility improvements across the company\'s core product.',
    },
];
