import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import heroSectionImg from '../assets/hero-section.jpg';

const team = [
    { name: 'Cameron Williamson', role: 'Founder & Automation Lead', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Esther Howards', role: 'Founder & Automation Lead', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Liam Cooper', role: 'Marketing Head', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const coreValues = [
    { title: 'Integrity', desc: 'We stand by our word and work with transparency.', icon: '🛡️' },
    { title: 'Innovation', desc: 'We embrace technology to create smarter solutions.', icon: '💡' },
    { title: 'Safety First', desc: 'Every service meets the highest safety standards.', icon: '⚡' },
    { title: 'Customer Commitment', desc: 'We grow when our clients succeed.', icon: '🤝' },
    { title: 'Quality Assurance', desc: 'We never compromise on performance or materials.', icon: '✔️' },
];

const milestones = [
    { year: 2017, label: '10+ Successful Projects' },
    { year: 2018, label: '100+ Clients Served' },
    { year: 2020, label: 'SCADA & IoT Integration' },
    { year: 2022, label: 'New Operations Hub' },
    { year: 2024, label: 'Renewable Sector Entry' },
];

export default function About() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <div className="w-16 h-16 border-4 border-[#8000ff] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar />
            <div className="pt-16">
                {/* Hero Banner */}
                <div className="rounded-3xl bg-pink-100 bg-opacity-80 text-white px-6 py-20 max-w-7xl mx-auto mt-8 mb-12 relative overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="flex-1 z-10">
                        <h1 className="text-black text-3xl md:text-4xl font-bold text-center md:text-left mb-2">About Our Electrical Automation Company</h1>
                    </div>
                    <div className="flex-1 flex justify-center mt-6 md:mt-0 z-10">
                        <img src={heroSectionImg} alt="About Hero" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
                    </div>
                    {/* Optional: background image overlay for extra style */}
                    <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: `url(${heroSectionImg})`}}></div>
                </div>
                {/* Headline Section */}
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-12 items-center">
                    <div>
                        <p className="text-gray-700 mb-2">Pleasure and so read the was hope.</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-200">
                            Ready to take <span className="text-[#1de9b6]">your business</span><br />to the next level?
                        </h2>
                        <p className="text-gray-600 mb-4">Let's power your operations with smart, scalable solutions. Get in touch today and automate your success.</p>
                        <div className="flex items-center gap-2 mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
                            <span className="text-gray-800 font-medium">Rated 4.9/5 stars</span>
                            <span className="text-yellow-400 ml-1">★★★★★</span>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-xl h-40 md:h-48 w-full transition-transform duration-300 hover:scale-105"></div>
                </div>
                {/* Mission & Vision */}
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <div className="bg-gray-100 rounded-xl p-6 mb-4 transition-shadow duration-200 hover:shadow-xl">
                            <p className="text-gray-700">To empower industries with reliable electrical and automation solutions. We aim to deliver services that improve efficiency and reduce downtime. Our team is committed to quality, safety, and client satisfaction. We believe in building systems that are smart, scalable, and sustainable. Through continuous improvement and advanced technologies, we ensure long-term value and seamless operations. Every project we undertake is guided by professionalism and precision. Our mission is to help industries grow through smarter infrastructure.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <div className="bg-gray-100 rounded-xl p-6 mb-4 transition-shadow duration-200 hover:shadow-xl">
                            <p className="text-gray-700">To be a trusted leader in industrial automation and electrical services. We envision a future where businesses run smarter and more securely. By blending innovation with experience, we aim to transform the way industries operate. Our focus is on delivering end-to-end solutions that evolve with our clients. We strive to expand our reach across multiple sectors and regions. Sustainability, reliability, and innovation are at our core. Our vision is to set new benchmarks in industrial excellence.</p>
                        </div>
                    </div>
                </div>
                {/* Milestones */}
                <div className="bg-gradient-to-r from-[#8000ff] to-[#4b006e] rounded-2xl py-10 px-4 max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Our Milestones</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {milestones.map((m, i) => (
                            <div key={m.year} className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-2 border-4 border-[#8000ff] shadow transition-transform duration-200 hover:scale-110">
                                    <span className="text-2xl font-bold text-[#8000ff]">{m.year}</span>
                                </div>
                                <span className="text-white font-medium text-center">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Team */}
                <div className="max-w-6xl mx-auto px-4 mb-12">
                    <h3 className="text-2xl font-bold text-center mb-8">Our team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="rounded-2xl bg-white shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl">
                                <img src={member.img} alt={member.name} className="w-28 h-28 rounded-xl object-cover mb-4 transition-transform duration-300 hover:scale-105" />
                                <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <div className="flex gap-2">
                                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#8000ff] hover:text-white transition-colors cursor-pointer">in</span>
                                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#8000ff] hover:text-white transition-colors cursor-pointer">f</span>
                                    <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#8000ff] hover:text-white transition-colors cursor-pointer">i</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Core Values */}
                <div className="max-w-6xl mx-auto px-4 mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {coreValues.map((val, i) => (
                            <div key={i} className="rounded-xl bg-white shadow p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl">
                                <div className="text-3xl mb-2">{val.icon}</div>
                                <h4 className="font-semibold mb-2">{val.title}</h4>
                                <p className="text-gray-600 text-center text-sm">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} 