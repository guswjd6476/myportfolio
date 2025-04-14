'use client';
import ProjectsSection from './api/ProjectsSection';
import CareerSection from './api/CareerSection';
import IntroSection from './api/IntroSection';
import AboutSection from './api/AboutSection';

export default function Home() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0f0f10]/80 border-b border-gray-800 text-white z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <div
                        className="text-xl font-bold font-mono tracking-tight text-[#00FFAB] cursor-pointer hover:opacity-80 transition"
                        onClick={() => scrollToSection('home')}
                    >
                        KHJ<span className="text-white">.dev</span>
                    </div>
                    <nav className="flex space-x-4">
                        {['about', 'career', 'projects'].map((section, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(section)}
                                className="relative group px-4 py-2 text-sm text-gray-300 hover:text-white transition"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00FFAB] transition-all group-hover:w-full"></span>
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <IntroSection />
            <AboutSection />

            <CareerSection />
            <ProjectsSection />
        </div>
    );
}
