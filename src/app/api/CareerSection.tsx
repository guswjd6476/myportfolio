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
import SectionHeader from './SectionHeader';

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
            { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
            { name: 'React', icon: <FaReact className="text-cyan-400" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
            { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-300" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
            { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
            { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-green-300" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
            { name: 'SEO 최적화', icon: <SiGoogleanalytics className="text-green-300" /> },
        ],
    },
];

export default function CareerSkillsTimeline() {
    return (
        <motion.div
            id="career"
            className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center py-20 px-6"
        >
            <SectionHeader
                number="02"
                title="Career & Skills"
            />

            <div className="w-full max-w-5xl space-y-12">
                {careers.map((career, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-8 shadow-lg transition-transform"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center mb-6">
                            <FaBriefcase className="text-3xl text-teal-400 mr-4" />
                            <div>
                                <h3 className="text-2xl font-bold text-white">{career.company}</h3>
                                <p className="text-sm text-gray-400">{career.period}</p>
                            </div>
                        </div>

                        <h4 className="text-xl font-semibold text-teal-300 mb-4">{career.position}</h4>
                        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed text-gray-300 font-light">
                            {career.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-teal-300 mb-2">기술 스택</h4>
                            <div className="flex flex-wrap gap-3">
                                {career.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full shadow-inner hover:shadow-md transition text-sm"
                                    >
                                        {skill.icon}
                                        <span className="ml-2">{skill.name}</span>
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
