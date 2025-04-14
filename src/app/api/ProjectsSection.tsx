'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLink, FaInfoCircle } from 'react-icons/fa';
import { projects } from '../lib/formatDate';
import SectionHeader from './SectionHeader';
import { Project } from '../types/type';

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
            className="min-h-screen bg-[#0e0e10] text-white px-4 sm:px-6 py-20 flex flex-col items-center"
        >
            <SectionHeader
                number="03"
                title="Projects 🚀"
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#1a1a1d] border border-[#2a2a2e] rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-[#2f2f33] text-xs sm:text-sm text-gray-200 px-3 py-1 rounded-full font-mono tracking-tight"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end space-x-3">
                            {project.notionUrl && (
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="hover:bg-yellow-500/80 bg-yellow-500 text-white rounded-md p-2 transition duration-200"
                                    title="자세히 보기"
                                >
                                    <FaInfoCircle className="text-base sm:text-lg" />
                                </button>
                            )}
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-blue-600 bg-blue-500 text-white rounded-md p-2 transition duration-200"
                                    title="라이브 링크"
                                >
                                    <FaLink className="text-base sm:text-lg" />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:bg-gray-700 bg-gray-800 text-white rounded-md p-2 transition duration-200"
                                    title="GitHub"
                                >
                                    <FaGithub className="text-base sm:text-lg" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        id="backdrop"
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleBackdropClick}
                    >
                        <motion.div
                            className="bg-[#1e1e20] text-white rounded-2xl p-4 sm:p-6 w-[92%] sm:w-11/12 max-w-5xl shadow-xl relative max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                                title="닫기"
                            >
                                ✖
                            </button>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                                {selectedProject.title} 상세 설명
                            </h3>
                            <iframe
                                src={selectedProject.notionUrl}
                                className="rounded-lg border border-gray-700 w-full h-[60vh] sm:h-[600px]"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
