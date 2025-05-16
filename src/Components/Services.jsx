import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Layers, Zap, Activity, Sliders, Cpu, BarChart3 } from 'lucide-react';
import heroSectionImg from '../assets/hero-section.jpg';
import controlPanelImg from '../assets/services/Control Panel Design.jpeg';
import wiringImg from '../assets/services/Industrial Wiring & Maintenance.jpeg';
import loadMgmtImg from '../assets/services/Load Management System.jpeg';
import plcScadaImg from '../assets/services/PLC & SCADA Integration.jpeg';
import powerQualityImg from '../assets/services/Power Quality Analysis.jpeg';
import energyOptImg from '../assets/services/Energy Optimization.jpg';

const services = [
  {
    title: 'Control Panel Design',
    desc: 'Custom-built panels for safe and efficient operations. Designed to meet your industrial requirements. End-to-end panel design and setup.',
    icon: <Layers size={28} />,
    img: controlPanelImg,
  },
  {
    title: 'Industrial Wiring & Maintenance',
    desc: 'Reliable wiring for heavy-duty environments. Safe installations and routine upkeep. Minimize risks and downtime.',
    icon: <Zap size={28} />,
    img: wiringImg,
  },
  {
    title: 'Load Management System',
    desc: 'Monitor and balance power usage to avoid overloads and reduce energy costs.',
    icon: <Sliders size={28} />,
    img: loadMgmtImg,
  },
  {
    title: 'PLC & SCADA Integration',
    desc: 'Smart automation with real-time control. Remote monitoring and data access. Boost efficiency through integration.',
    icon: <Activity size={28} />,
    img: plcScadaImg,
  },
  {
    title: 'Power Quality Analysis',
    desc: 'Detect and resolve voltage, current, and frequency issues for stable operations.',
    icon: <BarChart3 size={28} />,
    img: powerQualityImg,
  },
  {
    title: 'Energy Optimization',
    desc: 'Improve energy efficiency through smart controls and system fine-tuning.',
    icon: <Cpu size={28} />,
    img: energyOptImg,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Banner */}
        <div className="rounded-3xl bg-[#8000ff] bg-opacity-90 text-white px-6 py-16 max-w-7xl mx-auto mt-8 mb-20 relative overflow-hidden flex flex-col items-center">
          <img src={heroSectionImg} alt="Services Hero" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-2">High-impact services<br />for your business</h1>
        </div>
        {/* Services Grid: 2 columns x 3 rows, square & rounded cards */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <div key={service.title} className="flex bg-white rounded-2xl shadow-lg overflow-hidden min-h-[260px] min-w-[320px] max-w-[420px] aspect-[4/3] mx-auto">
              {/* Image left */}
              <div className="w-2/5 min-w-[120px] max-w-[160px] flex items-center justify-center bg-gray-100 h-full rounded-l-2xl">
                <img src={service.img} alt={service.title} className="object-cover w-full h-full rounded-l-2xl" />
              </div>
              {/* Description right */}
              <div className="flex-1 bg-[#8000ff] flex flex-col justify-center p-6 text-white hover:bg-[#4b006e] transition-all duration-200 cursor-pointer h-full rounded-r-2xl">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mb-3">
                  <span className="text-[#8000ff]">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-white/90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 