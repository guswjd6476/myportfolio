'use client';
import { motion } from 'framer-motion';
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
    const items = [
        { icon: <FaUser className="text-4xl text-cyan-400 mb-2" />, label: '이름', value: '강현정' },
        {
            icon: <FaBirthdayCake className="text-4xl text-pink-400 mb-2" />,
            label: '생년월일',
            value: '1995년 6월 15일',
        },
        { icon: <FaMapMarkerAlt className="text-4xl text-lime-400 mb-2" />, label: '거주지', value: '서울시 노원구' },
        {
            icon: <FaGraduationCap className="text-4xl text-purple-400 mb-2" />,
            label: '학력',
            value: '방송통신대학교 컴퓨터공학과 재학 중',
        },
    ];

    return (
        <motion.div
            id="about"
            className="min-h-screen flex flex-col items-center justify-center text-white px-4"
        >
            <SectionHeader
                number="01"
                title="About Me"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:bg-gray-700 duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {item.icon}
                        <h3 className="text-xl font-semibold text-white mb-1">{item.label}</h3>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
