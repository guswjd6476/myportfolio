'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiAmazon, SiGoogleanalytics } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const skills = [
    {
        name: 'HTML',
        icon: <FaHtml5 size={40} className="text-orange-500" />,
        level: 90,
        description: '시멘틱 마크업과 SEO 최적화 가능',
        projects: ['Landing Page', 'Portfolio Website', 'E-commerce 사이트'],
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt size={40} className="text-blue-500" />,
        level: 85,
        description: '반응형 디자인 및 애니메이션 구현 가능',
        projects: ['Dashboard UI', '모바일 웹앱', 'Admin Panel'],
    },
    {
        name: 'JavaScript',
        icon: <FaJs size={40} className="text-yellow-500" />,
        level: 80,
        description: 'ES6+ 문법 활용 가능, 비동기 처리 이해',
        projects: ['Todo App', 'Chart.js 데이터 시각화', 'Interactive 웹페이지'],
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript size={40} className="text-blue-600" />,
        level: 75,
        description: '타입 안정성을 확보한 코드 작성 가능',
        projects: ['Next.js 프로젝트', 'React 상태관리', 'API 연동'],
    },
    {
        name: 'React',
        icon: <FaReact size={40} className="text-cyan-500" />,
        level: 85,
        description: '컴포넌트 기반 개발 및 훅 사용 능숙',
        projects: ['E-commerce 사이트', 'Blog 플랫폼', '대시보드 앱'],
    },
    {
        name: 'React Native',
        icon: <TbBrandReactNative size={40} className="text-blue-500" />,
        level: 70,
        description: '크로스 플랫폼 모바일 앱 개발 가능',
        projects: ['모바일 커뮤니티 앱', 'React Native Expo 프로젝트', '하이브리드 앱 개발'],
    },
    {
        name: 'Firebase',
        icon: <SiFirebase size={40} className="text-yellow-500" />,
        level: 75,
        description: '실시간 데이터베이스 및 인증 시스템 구현 가능',
        projects: ['Firebase Authentication', 'Cloud Firestore 기반 채팅 앱', '푸시 알림 시스템'],
    },
    {
        name: 'AWS',
        icon: <SiAmazon size={40} className="text-orange-600" />,
        level: 65,
        description: 'AWS S3, Lambda, EC2 사용 가능',
        projects: ['S3 이미지 업로드', 'Lambda 함수 기반 API', 'EC2 서버 배포'],
    },
    {
        name: 'SEO 최적화',
        icon: <SiGoogleanalytics size={40} className="text-green-500" />,
        level: 80,
        description: '검색 엔진 최적화 및 웹사이트 속도 개선 가능',
        projects: ['Next.js SEO 설정', '웹사이트 성능 최적화', '메타태그 최적화'],
    },
];

export default function SkillsSection() {
    const [selectedSkill, setSelectedSkill] = useState(skills[0]);

    return (
        <motion.div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 px-6">
            {/* 왼쪽: 스킬 리스트 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl w-36 h-40 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        onClick={() => setSelectedSkill(skill)}
                    >
                        {skill.icon}
                        <span className="mt-3 text-gray-800 font-semibold">{skill.name}</span>
                        {/* 숙련도 바 */}
                        <div className="w-full mt-2 bg-gray-300 rounded-full h-2">
                            <motion.div
                                className="h-2 rounded-full"
                                style={{ width: `${skill.level}%`, backgroundColor: 'currentColor' }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, delay: index * 0.1 }}
                            />
                        </div>
                        <span className="text-sm text-gray-600 mt-1">{skill.level}%</span>
                    </motion.div>
                ))}
            </div>

            {/* 오른쪽: 선택한 스킬 상세 정보 */}
            <motion.div
                className="mt-10 lg:mt-0 lg:ml-10 bg-white shadow-xl rounded-xl p-6 w-80"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-gray-900">{selectedSkill.name}</h3>
                <div className="mt-2">{selectedSkill.icon}</div>
                <p className="text-gray-700 mt-4">{selectedSkill.description}</p>
                <h4 className="mt-4 font-semibold text-gray-800">📌 관련 프로젝트</h4>
                <ul className="list-disc list-inside text-gray-600">
                    {selectedSkill.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
