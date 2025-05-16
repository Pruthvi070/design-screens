import React from 'react';
import { Facebook, Twitter, InstagramIcon, Youtube } from "lucide-react"
import Navbar from './Navbar';
import Footer from './Footer';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar />
            
            {/* Project Content */}
            <div className="flex-grow">
                {/* Header with star patterns */}
                <div className="relative bg-[#8000ff] py-14 overflow-hidden">
                    {/* Top-left stars */}
                    <div className="absolute top-0 left-0 z-0 opacity-60">
                        <StarPattern />
                    </div>
                    {/* Top-right stars */}
                    <div className="absolute top-0 right-0 z-0 opacity-60 rotate-180">
                        <StarPattern />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <h1 className="text-5xl font-bold text-white text-center tracking-tight">Our Projects</h1>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="py-12 px-6 bg-white flex-grow">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.map((project, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg shadow-md group bg-black/5">
                                    <div className="h-64 relative">
                                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-full" />
                                        {/* Bottom overlay only */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                            <h3 className="text-xl font-semibold text-white drop-shadow mb-1">{project.title}</h3>
                                            <p className="text-white text-sm mb-4 drop-shadow">{project.description}</p>
                                            <a
                                                href={`/projects/${project.id}`}
                                                className="inline-block bg-[#8000ff] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-purple-800 transition"
                                            >
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

// Star pattern SVG for header corners
function StarPattern() {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, row) =>
                [...Array(6)].map((_, col) => (
                    <circle
                        key={row * 6 + col}
                        cx={col * 20 + 8}
                        cy={row * 20 + 8}
                        r="2.5"
                        fill="#fff"
                        opacity="0.25"
                    />
                ))
            )}
        </svg>
    )
}

const projects = [
    {
        id: "wind-power-plant",
        title: "Wind Power Plant",
        description:
            "Integrated PLC & SCADA for renewable energy operations. Enabled real-time data tracking, fault alerts, and energy output optimization.",
        image: "/src/assets/wind-power-plant.jpg",
    },
    {
        id: "manufacturing-plant",
        title: "Manufacturing Plant",
        description:
            "Streamlined production with a custom-built PLC integrated panel. Delivered enhanced efficiency and real-time monitoring.",
        image: "/src/assets/manufacturing-plant.png",
    },
    {
        id: "food-processing-unit",
        title: "Food Processing Unit",
        description:
            "Complete electrical layout with safe and clean cable management. Ensured power reliability and minimal maintenance.",
        image: "/src/assets/food-processing-unit.jpg",
    },
    {
        id: "scada-water-plant",
        title: "SCADA Integration- Water Plant",
        description:
            "Smart monitoring and remote control of treatment systems. Improved efficiency and fault response time.",
        image: "/src/assets/scada-water-plant.jpeg",
    },
    {
        id: "control-panel-steel",
        title: "Control Panel Setup - Steel Manufacturing",
        description: "Custom panel with PLC logic for automated rolling systems. Enhanced safety and process control.",
        image: "/src/assets/control-panel-steel.png",
    },
    {
        id: "energy-optimization-textile",
        title: "Energy Optimization - Textile Mill",
        description: "Reduced power wastage with automated load balancing. Lowered operational costs by 30%.",
        image: "/src/assets/energy-optimization-textile.jpg",
    },
    {
        id: "power-quality-pharma",
        title: "Power Quality Audit - Pharma Unit",
        description: "Identified and resolved frequent voltage dips. Boosted machine uptime and stability.",
        image: "/src/assets/power-quality-pharma.jpg",
    },
    {
        id: "industrial-wiring-storage",
        title: "Industrial Wiring - Cold Storage Facility",
        description:
            "Robust electrical layout designed for extreme conditions. Safe, efficient, and compliant wiring solution.",
        image: "/src/assets/industrial-wiring-storage.jpg",
    },
    {
        id: "scada-iot-wind",
        title: "SCADA + IoT - Wind Power Project",
        description:
            "Enabled remote turbine monitoring and real-time alerts. Optimized energy output and maintenance cycles.",
        image: "/src/assets/scada-iot-wind.jpg",
    },
]
