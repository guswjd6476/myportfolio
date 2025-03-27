'use client';
import { motion } from 'framer-motion';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

import ProjectsSection from './api/ProjectsSection';
import CareerSection from './api/CareerSection';

export default function Home() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md py-4 px-6 z-50">
                <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
                    강현정프로젝트
                </div>
                <nav className="flex space-x-4">
                    {['about', 'career', 'projects'].map((section, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(section)}
                            className="px-4 py-2 text-gray-700 hover:text-blue-500"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>
            </header>

            <motion.div
                id="home"
                className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
                <h1 className="text-5xl font-bold text-center mb-4 drop-shadow-lg">프론트엔드 개발자 강현정 입니다</h1>
                <p className="text-lg text-center mb-6 max-w-2xl mx-auto">
                    안녕하세요! 가치를 탐구하고 끊임없이 도전하는 프론트엔드 개발자{' '}
                    <strong className="text-yellow-300">강현정</strong>입니다. 사용자 경험을 극대화하는 웹을 만들기
                    위해, 항상 새로운 기술과 아이디어에 도전하고 있습니다.
                </p>
                <div
                    className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-800 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
                    onClick={() => scrollToSection('about')}
                >
                    더 알아보기
                </div>
            </motion.div>

            <motion.div id="about" className="h-screen flex flex-col items-center justify-center bg-gray-300">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg text-gray-600">
                    <div className="flex flex-col items-center">
                        <FaUser className="text-4xl text-blue-500 mb-4" />
                        <h3 className="font-semibold text-gray-800">이름</h3>
                        <p>강현정</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <FaBirthdayCake className="text-4xl text-yellow-500 mb-4" />
                        <h3 className="font-semibold text-gray-800">생년월일</h3>
                        <p>1995년 6월 15일</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-4xl text-green-500 mb-4" />
                        <h3 className="font-semibold text-gray-800">거주지</h3>
                        <p>서울시 노원구</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <FaGraduationCap className="text-4xl text-purple-500 mb-4" />
                        <h3 className="font-semibold text-gray-800">학력</h3>
                        <p>방송통신대학교 컴퓨터공학과 재학 중</p>
                    </div>
                </div>
            </motion.div>

            <CareerSection />
            <ProjectsSection />
        </div>
    );
}
