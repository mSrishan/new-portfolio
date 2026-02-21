'use client';

import { useState, useEffect, useRef } from 'react';

const useScrollObserver = (threshold = 0.1, triggerOnce = true) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (triggerOnce && domRef.current) {
                            observer.unobserve(domRef.current);
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold }
        );

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold, triggerOnce]);

    return [domRef, isVisible] as const;
};

interface FadeInProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
    duration?: string;
}

const FadeIn = ({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    duration = 'duration-700',
}: FadeInProps) => {
    const [ref, isVisible] = useScrollObserver();

    const getDirectionClasses = () => {
        switch (direction) {
            case 'up': return 'translate-y-12';
            case 'down': return '-translate-y-12';
            case 'left': return 'translate-x-12';
            case 'right': return '-translate-x-12';
            default: return 'translate-y-12';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all ${duration} ease-out ${isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${getDirectionClasses()}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
