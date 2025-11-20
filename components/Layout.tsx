import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    onModalOpen: (modal: 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca') => void;
}

const GalaxyBackground: React.FC = () => {
    // Pre-calculate star positions to avoid hydration mismatch if possible, 
    // but here using random for visual effect is acceptable as it's a background.
    const stars = Array.from({ length: 75 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.7 + 0.3,
        size: Math.random() * 2 + 1,
    }));

    return (
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#0B0B15]">
            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes nebula-drift {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(2%, 2%) scale(1.1); }
                    66% { transform: translate(-2%, 1%) scale(0.95); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                .star {
                    position: absolute;
                    background-color: white;
                    border-radius: 50%;
                    animation: twinkle 4s ease-in-out infinite;
                    box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
                }
                .nebula {
                    position: absolute;
                    filter: blur(80px);
                    opacity: 0.4;
                    animation: nebula-drift 20s infinite alternate ease-in-out;
                    border-radius: 50%;
                }
            `}</style>
            
            {/* Deep Space Gradient Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0f0f1a] to-[#000000]"></div>

            {/* Multi-colored Nebulas */}
            <div className="nebula bg-purple-700 w-[50vw] h-[50vh] top-[-10%] left-[-10%] opacity-30"></div>
            <div className="nebula bg-blue-700 w-[40vw] h-[40vh] bottom-[-10%] right-[-10%] opacity-30 animation-delay-2000"></div>
            <div className="nebula bg-pink-600 w-[30vw] h-[30vh] top-[40%] left-[30%] opacity-20 mix-blend-screen animation-delay-4000"></div>
            <div className="nebula bg-indigo-900 w-[60vw] h-[60vh] bottom-[10%] left-[-20%] opacity-20"></div>

            {/* Stars */}
            {stars.map((star, i) => (
                <div 
                    key={i} 
                    className="star" 
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: star.animationDelay
                    }}
                ></div>
            ))}
            
            {/* Scanline overlay for texture (very subtle) */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
    );
};

const Layout: React.FC<LayoutProps> = ({ children, onModalOpen }) => {
    const navLinks = [
        { name: 'Guide', modal: 'guide' as const },
        { name: 'About', modal: 'about' as const },
        { name: 'Contact', modal: 'contact' as const },
    ];
    
    const footerLinks = [
         { name: 'Privacy', modal: 'privacy' as const },
         { name: 'Terms', modal: 'terms' as const },
         { name: 'DMCA', modal: 'dmca' as const },
    ];

    return (
        <div className="relative min-h-screen flex flex-col font-sans text-slate-200 selection:bg-purple-500/30 selection:text-purple-100">
            <GalaxyBackground />
            
            <header className="w-full z-20 px-6 py-5 transition-all duration-300 backdrop-blur-[2px]">
                 <nav className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <span className="font-bold text-white text-xs">1024</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white hidden sm:block">FSConverter</span>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                        {navLinks.map(link => (
                             <button
                                key={link.name}
                                onClick={() => onModalOpen(link.modal)}
                                className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>
            
            <main className="flex-grow w-full flex flex-col items-center justify-start py-8 md:py-12 px-4 relative z-10">
                {children}
            </main>

            <footer className="py-8 text-center text-slate-500 text-sm relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-md">
                <div className="container mx-auto flex flex-col gap-4">
                    <div className="flex justify-center gap-6">
                         {footerLinks.map(link => (
                            <button
                                key={link.name}
                                onClick={() => onModalOpen(link.modal)}
                                className="hover:text-purple-400 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} File Size Converter. Designed by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">HSINI MOHAMED</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;