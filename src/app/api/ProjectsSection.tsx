'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: 'E-commerce Website',
        description: 'React, Next.js, and TailwindCSS를 활용한 반응형 쇼핑몰 사이트.',
        image: '/projects/ecommerce.jpg',
        tech: ['React', 'Next.js', 'TailwindCSS'],
    },
    {
        title: 'Admin Dashboard',
        description: '데이터 시각화를 위한 대시보드 UI 디자인 및 구현.',
        image: '/projects/dashboard.jpg',
        tech: ['React', 'Recharts', 'TailwindCSS'],
    },
    {
        title: 'Social Media App',
        description: '사용자 인증 및 실시간 채팅 기능이 포함된 SNS 플랫폼.',
        image: '/projects/social.jpg',
        tech: ['React', 'Firebase', 'TailwindCSS'],
    },
    {
        title: 'Portfolio Website',
        description: '개인 포트폴리오 사이트. 애니메이션 및 다크모드 지원.',
        image: '/projects/portfolio.jpg',
        tech: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    },
    {
        title: 'Blog Platform',
        description: 'Markdown 기반의 블로그 플랫폼, 서버리스 환경 지원.',
        image: '/projects/blog.jpg',
        tech: ['Next.js', 'MDX', 'Vercel'],
    },
    {
        title: 'NFT Marketplace',
        description: '블록체인 기반의 NFT 거래 플랫폼 UI/UX 개발.',
        image: '/projects/nft.jpg',
        tech: ['React', 'Blockchain', 'TailwindCSS'],
    },
];

export default function ProjectsSection() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <motion.div id="projects" className="h-screen flex flex-col items-center justify-center bg-gray-200 px-6">
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            <p className="text-lg text-gray-600 mt-4">Check out my latest work here.</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group w-80 h-60 bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
                        onClick={() => setSelected(project)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:opacity-75 transition duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white text-center">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selected && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900">{selected.title}</h3>
                        <p className="mt-2 text-gray-700">{selected.description}</p>
                        <div className="mt-4 flex gap-2">
                            {selected.tech.map((tech, idx) => (
                                <span key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                            onClick={() => setSelected(null)}
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}
