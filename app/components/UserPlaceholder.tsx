'use client';

import Image from 'next/image';
import ProfilePic from '../../public/profile_pic01.png';

const UserPlaceholder = () => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-slate-50 to-cyan-100 dark:from-indigo-950 dark:via-slate-900 dark:to-cyan-950" />

        {/* Mesh grid overlay */}
        <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
            style={{
                backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
            }}
        />

        {/* Rotating ring */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div
                className="w-[85%] h-[85%] rounded-full border border-indigo-300/30 dark:border-indigo-500/20 animate-spin"
                style={{ animationDuration: '20s' }}
            />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div
                className="w-[70%] h-[70%] rounded-full border border-dashed border-cyan-300/40 dark:border-cyan-500/20 animate-spin"
                style={{ animationDuration: '15s', animationDirection: 'reverse' }}
            />
        </div>

        {/* Blob glow */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-400/20 dark:bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
        <div
            className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-cyan-400/20 dark:bg-cyan-500/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
        />

        {/* Profile image */}
        <div
            className="relative z-10 w-[72%] h-[72%] overflow-hidden shadow-2xl shadow-indigo-900/20 dark:shadow-indigo-900/40"
            style={{
                borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
                animation: 'blobMorph 8s ease-in-out infinite, floatY 4s ease-in-out infinite',
            }}
        >
            {/* Inner border ring */}
            <div
                className="absolute inset-0 z-10 ring-2 ring-indigo-500/20 dark:ring-indigo-400/20"
                style={{ borderRadius: 'inherit' }}
            />
            <Image
                src={ProfilePic}
                alt="Srishan Mandawala"
                fill
                className="object-cover scale-105"
                priority
            />
        </div>

        {/* Corner dots */}
        <div className="absolute top-6 right-6 flex gap-1.5">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 dark:bg-indigo-400/30 animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                />
            ))}
        </div>
        <div className="absolute bottom-6 left-6 flex gap-1.5">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 dark:bg-cyan-400/30 animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                />
            ))}
        </div>

        {/* Keyframes */}
        <style jsx>{`
            @keyframes blobMorph {
                0%, 100% { border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%; }
                25%       { border-radius: 50% 50% 40% 60% / 55% 45% 60% 40%; }
                50%       { border-radius: 45% 55% 60% 40% / 40% 60% 45% 55%; }
                75%       { border-radius: 55% 45% 45% 55% / 60% 40% 55% 45%; }
            }
            @keyframes floatY {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-10px); }
            }
        `}</style>
    </div>
);

export default UserPlaceholder;