'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaInfoCircle } from 'react-icons/fa';
interface Project {
    title: string;
    description: string;
    notionUrl: string;
    tech: string[];
    url: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: 'MY_ANNIVERSARY',
        description: 'Next.js, supabase 를 사용한 기념을 공유 플랫폼',
        url: 'https://my-anniversary.vercel.app',
        notionUrl: 'https://thin-garlic-63f.notion.site/ebd/1c3c07f02d28807aa08bc070112996e2',
        githubUrl: 'https://github.com/guswjd6476/my-anniversary.git',
        tech: ['Supabase', 'Next.js', 'TailwindCSS'],
    },

    {
        title: 'STATE_MANAGEMENT',
        description: '그룹, 개인의 실적 데이터를 관리하는 플랫폼',
        url: '',
        notionUrl: '',
        githubUrl: 'https://github.com/guswjd6476/nowonproject',
        tech: ['googleAPI', 'Next.js', 'TailwindCSS'],
    },
    {
        title: 'MINI_DELIVERY',
        description: 'NEXT.js Supabase 를 사용한 주문 및 배달 플랫폼',
        url: 'https://deliveryproject.vercel.app/',
        notionUrl: 'https://thin-garlic-63f.notion.site/ebd/1c8c07f02d2880dd8f03e452be89f3a8',
        githubUrl: 'https://github.com/guswjd6476/delivery',
        tech: ['PostgreSQL', 'Next.js', 'TailwindCSS'],
    },

    {
        title: 'QR TEST',
        description: '학생들의 QR 출석 참석을 위한 플랫폼',
        url: 'https://qrtest-eight.vercel.app',
        notionUrl: 'https://thin-garlic-63f.notion.site/ebd/1c8c07f02d28807aa215c41df5c4147c',
        githubUrl: 'https://github.com/guswjd6476/qrtest.git',
        tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    },
    {
        title: 'REFRAMEPOINT',
        description: '심리테스트를 저장하고 결과를 보여주는 플랫폼',
        url: 'https://reframepoint.vercel.app/',
        notionUrl: 'https://thin-garlic-63f.notion.site/ebd/1c8c07f02d2880eaa729e8bfa322bbee',
        githubUrl: 'https://github.com/guswjd6476/reframepoint',
        tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    },

    {
        title: 'STUDIOMOONA',
        description: '자기개발 컨텐츠를 서로 공유하는 플랫폼',
        url: 'https://studiomoona.co.kr',
        notionUrl: '',
        githubUrl: '',
        tech: ['Next.js', 'TailwindCSS'],
    },
    {
        title: 'GROW_SEED',
        description: '업사이클링과 지속가능한 발전에 참여하는 플랫폼',
        url: 'https://portfolio-938d1.web.app/',
        notionUrl: '',
        githubUrl: 'https://github.com/guswjd6476/growseed',
        tech: ['Vue', 'CSS', 'Firebase'],
    },
    {
        title: 'PICK_HAPPY',
        description: '나와 어울리는 식물을 찾는 심리테스트',
        url: 'https://pickhappy-sandy.vercel.app/',
        notionUrl: 'https://thin-garlic-63f.notion.site/ebd/1c8c07f02d2880c58105f985c8eb6a3b',
        githubUrl: 'https://github.com/guswjd6476/pickhappy',
        tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    },
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const closeModal = () => setSelectedProject(null);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).id === 'backdrop') {
            closeModal();
        }
    };

    return (
        <div
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12"
        >
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>

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
                                <span
                                    key={idx}
                                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex justify-center space-x-4">
                            {project.notionUrl && (
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="px-4 py-2 bg-yellow-400 text-white rounded-lg flex items-center hover:bg-yellow-500 transition-transform transform hover:scale-105"
                                >
                                    <FaInfoCircle className="mr-2 inline" />
                                </button>
                            )}
                            {/* Only show the URL button if project.url exists */}
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center hover:bg-blue-600 transition-transform transform hover:scale-105"
                                >
                                    <FaLink className="mr-2 inline" />
                                </a>
                            )}

                            {/* Only show the GitHub button if project.githubUrl exists */}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center hover:bg-gray-900 transition-transform transform hover:scale-105"
                                >
                                    <FaGithub className="mr-2 inline" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <motion.div
                    id="backdrop"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        className="bg-white rounded-lg p-6 w-3/4 max-w-4xl shadow-lg relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.title} - 설명</h3>
                        <iframe
                            src={selectedProject.notionUrl}
                            width="100%"
                            height="600"
                            allowFullScreen
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
