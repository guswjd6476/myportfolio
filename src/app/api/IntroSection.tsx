'use client';
import { Typewriter } from 'react-simple-typewriter';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { motion } from 'framer-motion';

export default function IntroSection() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            id="home"
            className="h-screen flex flex-col items-center justify-center  text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-semibold tracking-wide text-center mb-6 text-cyan-300 drop-shadow-md"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <span className="block">
                    <Typewriter
                        words={['프론트엔드 개발자 강현정입니다', '끊임없이 노력하며 발전하는 개발자를 꿈꿉니다']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1400}
                    />
                </span>
            </motion.h1>

            <motion.p
                className="text-base md:text-lg text-center mb-8 max-w-xl mx-auto text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                안녕하세요! 가치를 탐구하고 끊임없이 도전하는 프론트엔드 개발자{' '}
                <strong className="text-cyan-400">강현정</strong>입니다. 사용자 경험을 극대화하는 웹을 만들기 위해, 항상
                새로운 기술과 아이디어에 도전하고 있습니다.
            </motion.p>

            <motion.div
                className="flex gap-6 text-4xl mb-10 text-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <SiReact
                    title="React"
                    className="hover:text-white hover:scale-125 transition-transform duration-300"
                />
                <SiTypescript
                    title="TypeScript"
                    className="hover:text-white hover:scale-125 transition-transform duration-300"
                />
                <SiTailwindcss
                    title="Tailwind CSS"
                    className="hover:text-white hover:scale-125 transition-transform duration-300"
                />
                <SiNextdotjs
                    title="Next.js"
                    className="hover:text-white hover:scale-125 transition-transform duration-300"
                />
            </motion.div>

            <motion.div
                className="px-6 py-3 text-lg font-semibold bg-cyan-400 text-gray-900 rounded-xl shadow-lg hover:bg-cyan-300 transition duration-300 cursor-pointer"
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.05 }}
            >
                더 알아보기
            </motion.div>
        </motion.div>
    );
}
