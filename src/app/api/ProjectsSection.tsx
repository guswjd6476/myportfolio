'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    image?: string;
    tech: string[];
    url: string;
}

const projects: Project[] = [
    {
        title: 'MY_ANNIVERSARY',
        description: 'Next.js, supabase 를 사용한 기념을 공유 플랫폼',
        url: 'https://my-anniversary.vercel.app',
        tech: ['Supabase', 'Next.js', 'TailwindCSS'],
    },
    {
        title: 'MINI_DELIVERY',
        description: 'NEXT.js Supabase 를 사용한 주문 및 배달 플랫폼',
        url: 'https://delivery-seven-livid.vercel.app/',
        tech: ['PostgreSQL', 'Next.js', 'TailwindCSS'],
    },
    {
        title: 'QR TEST',
        description: '학생들의 QR 출석 참석을 위한 플랫폼',
        url: 'https://qrtest-eight.vercel.app',
        tech: ['Next.js', 'Firebase', 'TailwindCSS'],
    },
    {
        title: 'REFRAMEPOINT',
        description: '심리테스트를 저장하고 결과를 보여주는 플랫폼',
        url: 'https://reframepoint.vercel.app/',
        tech: ['Next.js', 'Firebase', 'TailwindCSS'],
    },
    {
        title: 'STUDIOMOONA',
        description: '자기개발 컨텐츠를 서로 공유하는 플랫폼',
        url: 'https://studiomoona.co.kr',
        tech: ['Next.js', 'TailwindCSS'],
    },
    {
        title: 'GROW_SEED',
        description: '업사이클링과 지속가능한 발전에 참여하는 플랫폼',
        url: 'https://portfolio-938d1.web.app/',
        tech: ['Vue', 'CSS', 'Firebase'],
    },
];

export default function ProjectsSection() {
    useEffect(() => {
        async function fetchOgImages() {
            const images: { [key: string]: string } = {};
            for (const project of projects) {
                const domain = new URL(project.url).hostname;
                images[project.url] = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
            }
        }
        fetchOgImages();
    }, []);

    return (
        <motion.div
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12"
        >
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            <p className="text-lg text-gray-600 mt-4">Check out my latest work here.</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between transition hover:shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold text-gray-900 mt-4">{project.title}</h3>
                            <p className="text-gray-600 mt-2 text-center">{project.description}</p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg inline-block text-center hover:bg-blue-600 transition"
                        >
                            프로젝트 방문
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
