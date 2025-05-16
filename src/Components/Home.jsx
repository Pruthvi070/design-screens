import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { Facebook, Twitter, Instagram, Youtube, ChevronLeft, ChevronRight, Menu, X, Layers, Zap, Activity } from 'lucide-react';
import windPowerPlantImg from "../assets/wind-power-plant.jpg";
import manufacturingPlantImg from "../assets/manufacturing-plant.png";
import foodProcessingUnitImg from "../assets/food-processing-unit.jpg";

// Google Fonts import for Inter
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const projects = [
    {
        id: "wind-power-plant",
        title: "Wind Power Plant",
        description:
            "Integrated PLC & SCADA for renewable energy operations. Enabled real-time data tracking, fault alerts, and energy output optimization.",
        image: windPowerPlantImg,
    },
    {
        id: "manufacturing-plant",
        title: "Manufacturing Plant",
        description:
            "Streamlined production with a custom-built PLC integrated panel. Delivered enhanced efficiency and real-time monitoring.",
        image: manufacturingPlantImg,
    },
    {
        id: "food-processing-unit",
        title: "Food Processing Unit",
        description:
            "Complete electrical layout with safe and clean cable management. Ensured power reliability and minimal maintenance.",
        image: foodProcessingUnitImg,
    },
];

// Denser star pattern
function StarPattern() {
    return (
        <svg width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[...Array(9)].map((_, i) => (
                <g key={i}>
                    {[...Array(9)].map((_, j) => (
                        <circle
                            key={j}
                            cx={10 + i * 18}
                            cy={10 + j * 18}
                            r="2.2"
                            fill="#fff"
                            opacity="0.18"
                        />
                    ))}
                </g>
            ))}
        </svg>
    );
}

function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="w-16 h-16 border-4 border-[#8000ff] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}

function App() {
    const [loading, setLoading] = useState(true);
    const [projectIndex, setProjectIndex] = useState(0);
    const [projectsPerView, setProjectsPerView] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) setProjectsPerView(1);
            else if (window.innerWidth < 1024) setProjectsPerView(2);
            else setProjectsPerView(3);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, projects.length - projectsPerView);
    const visibleProjects = projects.slice(projectIndex, projectIndex + projectsPerView);

    const handlePrev = () => setProjectIndex(i => Math.max(0, i - 1));
    const handleNext = () => setProjectIndex(i => Math.min(maxIndex, i + 1));

    if (loading) return <LoadingSpinner />;

    return (
        <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar />
            {/* Hero Section */}
            <section className="relative bg-[#8000ff] py-14 overflow-hidden">
                {/* Top-left stars */}
                <div className="absolute top-0 left-0 z-0 opacity-60">
                    <StarPattern />
                </div>
                {/* Top-right stars */}
                <div className="absolute top-0 right-0 z-0 opacity-60 rotate-180">
                    <StarPattern />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-5xl font-bold text-white text-center md:text-left tracking-tight">
                                Powering Industry Through <span className="text-[#1de9b6]">Smart</span> Automation
                            </h1>
                            <p className="text-white mt-4 mb-6 text-center md:text-left">
                                Experts in control panel design, industrial wiring & PLC/SCADA integration.
                            </p>
                            <a href="/services" className="inline-block bg-white text-[#8000ff] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-transform duration-200 transform hover:scale-105 shadow-md">
                                Services
                            </a>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#8000ff] bg-opacity-30"></div>
                                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[#8000ff]">
                                    <img
                                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        alt="Power lines"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[#1de9b6] text-2xl font-medium">Our Services</h2>
                        <h3 className="text-3xl font-bold mt-2">
                            High-impact services<br />for your business
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-purple-100 rounded-3xl p-8 text-[#8000ff] transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#4b006e] hover:text-white cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                                <Layers className="text-[#8000ff]" size={24} />
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Control Panel Design</h4>
                            <p className="text-sm">
                                Custom-built panels for safe and efficient operations. Designed to meet your industrial requirements. End-to-end panel design and setup.
                            </p>
                        </div>
                        {/* Service 2 */}
                        <div className="bg-purple-100 rounded-3xl p-8 text-[#8000ff] transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#4b006e] hover:text-white cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                                <Zap className="text-[#8000ff]" size={24} />
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Industrial Wiring & Maintenance</h4>
                            <p className="text-sm">
                                Reliable wiring for heavy-duty environments. Safe installations and routine upkeep. Minimize risks and downtime.
                            </p>
                        </div>
                        {/* Service 3 */}
                        <div className="bg-purple-100 rounded-3xl p-8 text-[#8000ff] transition-all duration-200 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#4b006e] hover:text-white cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                                <Activity className="text-[#8000ff]" size={24} />
                            </div>
                            <h4 className="text-xl font-semibold mb-3">PLC & SCADA Integration</h4>
                            <p className="text-sm">
                                Smart automation with real-time control. Remote monitoring and data access. Boost efficiency through integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 grid grid-cols-8 gap-4">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div key={i} className="w-4 h-4 flex items-center justify-center">
                                <div className="w-1 h-1 bg-[#8000ff] rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/5 mb-8 md:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Team working together"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-3/5 md:pl-12">
                            <h2 className="text-2xl font-medium text-[#1de9b6] mb-2">Why Choose us</h2>
                            <h3 className="text-3xl font-bold mb-4">"Smart Automation. Reliable Execution."</h3>
                            <p className="text-gray-600 mb-8">
                                Experienced professionals delivering reliable, high-quality solutions tailored to your needs. We combine technical expertise with scalable, custom services for every project. On-time delivery and long-term performance are at the core of what we do.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <h4 className="text-3xl font-bold text-[#8000ff]">20 +</h4>
                                    <p className="text-sm text-gray-600">Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#8000ff]">230 +</h4>
                                    <p className="text-sm text-gray-600">Certified Engineers</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#8000ff]">150</h4>
                                    <p className="text-sm text-gray-600">Companies Helped</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-[#8000ff]">120</h4>
                                    <p className="text-sm text-gray-600">Revenue Generated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
                    <div className="relative">
                        <button onClick={handlePrev} disabled={projectIndex === 0} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md transition-transform duration-200 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed">
                            <ChevronLeft size={24} className="text-gray-700" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                            {visibleProjects.map((project) => (
                                <div key={project.id} className="relative overflow-hidden rounded-lg shadow-md group transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
                                    <div className="h-64 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                            <h3 className="text-xl font-semibold text-white drop-shadow mb-1">{project.title}</h3>
                                            <p className="text-white text-sm mb-4 drop-shadow">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNext} disabled={projectIndex === maxIndex} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md transition-transform duration-200 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed">
                            <ChevronRight size={24} className="text-gray-700" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Says</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
                            <p className="text-gray-600 mb-4">
                                "Their team delivered exactly what we needed — on time and with precision. The control panel design was flawless and boosted our system efficiency."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Rajiv Menon"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Rajiv Menon</h4>
                                    <p className="text-sm text-gray-500">Plant Manager, TechSteel Industries</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
                            <p className="text-gray-600 mb-4">
                                "We were impressed with their wiring quality and safety compliance. The team was professional, responsive, and highly skilled throughout the project."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/75.jpg"
                                        alt="Anvesh Verma"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Anvesh Verma</h4>
                                    <p className="text-sm text-gray-500">Operations Head, AgroPulse Foods</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl">
                            <p className="text-gray-600 mb-4">
                                "Thanks to their SCADA integration, we now have real-time control over our plant operations. It's a game-changer for our maintenance and reporting."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/62.jpg"
                                        alt="Sameer Paul"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Sameer Paul</h4>
                                    <p className="text-sm text-gray-500">Project Lead, AquaFlow Utilities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-[#8000ff] rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#8000ff] to-[#4b006e] text-white py-16 px-6 mt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-[#8000ff] rounded-full"></div>
                            </div>
                            <span className="ml-2 text-lg font-semibold">EleAutomation</span>
                        </div>
                        <p className="font-semibold mb-2">Built with Precision. Delivered with Trust.</p>
                        <p className="text-sm mb-4">
                            Delivering quality fabrication solutions across industries—on time, every time.
                        </p>
                        <div className="mb-4">
                            <p className="font-semibold mb-1">Address:</p>
                            <p className="text-sm">
                                ABC Fabrication Pvt. Ltd. Plot No. 45,<br />Industrial Estate, Sector 12, Pune - 411019,<br />Maharashtra, India
                            </p>
                        </div>
                        <p className="text-sm">Phone: +91-9876543210</p>
                        <p className="text-sm">Email: info@abcfabrication.com</p>
                    </div>
                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Home</a></li>
                            <li><a href="/about" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> About</a></li>
                            <li><a href="/services" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Services</a></li>
                            <li><a href="/projects" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Projects</a></li>
                            <li><a href="/contact" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Contact</a></li>
                        </ul>
                    </div>
                    {/* Our Services */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="/services/control-panel" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Control Panel Design</a></li>
                            <li><a href="/services/industrial-wiring" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Industrial Wiring and Maintenance</a></li>
                            <li><a href="/services/plc-scada" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> PLC and SCADA Integration</a></li>
                            <li><a href="/services/load-management" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Load Management</a></li>
                            <li><a href="/services/power-quality" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Power Quality Analysis</a></li>
                            <li><a href="/services/energy-optimization" className="hover:underline flex items-center transition-colors duration-200 hover:text-[#1de9b6]"><span className="mr-2">•</span> Energy Optimization</a></li>
                        </ul>
                    </div>
                    {/* Follow us */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline flex items-center transition-transform duration-200 hover:scale-110 hover:text-[#1de9b6]"><Facebook className="w-5 h-5 mr-2" /> Facebook</a></li>
                            <li><a href="#" className="hover:underline flex items-center transition-transform duration-200 hover:scale-110 hover:text-[#1de9b6]"><Twitter className="w-5 h-5 mr-2" /> Twitter</a></li>
                            <li><a href="#" className="hover:underline flex items-center transition-transform duration-200 hover:scale-110 hover:text-[#1de9b6]"><Instagram className="w-5 h-5 mr-2" /> Instagram</a></li>
                            <li><a href="#" className="hover:underline flex items-center transition-transform duration-200 hover:scale-110 hover:text-[#1de9b6]"><Youtube className="w-5 h-5 mr-2" /> Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-[#8000ff] text-sm text-center">
                    ©Fabrication, 2019. We love our users!
                </div>
            </footer>
        </div>
    );
}

export default App;