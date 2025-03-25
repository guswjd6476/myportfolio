'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiSupabase,
    SiFirebase,
    SiGoogleanalytics,
} from 'react-icons/si';

const careers = [
    {
        company: '니즈로봇',
        period: '2022.11 - 2024.10',
        position: '프론트엔드 개발자',
        description: [
            'AI 프로젝트 개발 서버 구축 및 유지보수',
            'MongoDB를 활용한 대량데이터 처리 및 관리',
            '자사 사이트 개발 및 유지보수',
            '10개 이상의 프로젝트 개발 진행',
            'SEO 최적화 및 웹 접근성 개선',
        ],
        skills: [
            { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
            { name: 'React', icon: <FaReact className="text-cyan-500" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
            { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
            { name: 'SEO 최적화', icon: <SiGoogleanalytics className="text-green-500" /> },
        ],
    },
];

export default function CareerSkillsTimeline() {
    return (
        <motion.div
            id="career"
            className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-6"
        >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-16 drop-shadow-lg">🚀 Career & Skills</h2>

            <div className="w-full max-w-5xl space-y-12">
                {careers.map((career, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-2xl rounded-2xl p-8 transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-6">
                            <FaBriefcase className="text-4xl text-gray-800 mr-6" />
                            <div>
                                <h3 className="text-3xl font-semibold text-gray-900">{career.company}</h3>
                                <p className="text-lg text-gray-600">{career.period}</p>
                            </div>
                        </div>

                        <h4 className="text-2xl font-semibold text-gray-800 mb-4">{career.position}</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {career.description.map((desc, idx) => (
                                <li key={idx} className="text-lg">
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        {/* 기술 스택 */}
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-gray-800">사용 기술</h4>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {career.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center bg-white shadow-md px-4 py-2 rounded-full border border-gray-300"
                                    >
                                        {skill.icon}
                                        <span className="ml-2 text-gray-900 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
