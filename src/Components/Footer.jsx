import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
                    <p className="text-sm mb-4">Delivering quality fabrication solutions across industries—on time, every time.</p>
                    <div className="mb-4">
                        <p className="font-semibold mb-1">Address:</p>
                        <p className="text-sm">ABC Fabrication Pvt. Ltd. Plot No. 45,<br />Industrial Estate, Sector 12, Pune - 411019,<br />Maharashtra, India</p>
                    </div>
                    <p className="text-sm">Phone: +91-9876543210</p>
                    <p className="text-sm">Email: info@abcfabrication.com</p>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline flex items-center"><span className="mr-2">•</span> Home</Link></li>
                        <li><Link to="/about" className="hover:underline flex items-center"><span className="mr-2">•</span> About</Link></li>
                        <li><Link to="/services" className="hover:underline flex items-center"><span className="mr-2">•</span> Services</Link></li>
                        <li><Link to="/projects" className="hover:underline flex items-center"><span className="mr-2">•</span> Projects</Link></li>
                        <li><Link to="/contact" className="hover:underline flex items-center"><span className="mr-2">•</span> Contact</Link></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div className="col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li><Link to="/services/control-panel" className="hover:underline flex items-center"><span className="mr-2">•</span> Control Panel Design</Link></li>
                        <li><Link to="/services/industrial-wiring" className="hover:underline flex items-center"><span className="mr-2">•</span> Industrial Wiring and Maintenance</Link></li>
                        <li><Link to="/services/plc-scada" className="hover:underline flex items-center"><span className="mr-2">•</span> PLC and SCADA Integration</Link></li>
                        <li><Link to="/services/load-management" className="hover:underline flex items-center"><span className="mr-2">•</span> Load Management</Link></li>
                        <li><Link to="/services/power-quality" className="hover:underline flex items-center"><span className="mr-2">•</span> Power Quality Analysis</Link></li>
                        <li><Link to="/services/energy-optimization" className="hover:underline flex items-center"><span className="mr-2">•</span> Energy Optimization</Link></li>
                    </ul>
                </div>

                {/* Follow us */}
                <div className="col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline flex items-center"><Facebook className="w-5 h-5 mr-2" /> Facebook</a></li>
                        <li><a href="#" className="hover:underline flex items-center"><Twitter className="w-5 h-5 mr-2" /> Twitter</a></li>
                        <li><a href="#" className="hover:underline flex items-center"><Instagram className="w-5 h-5 mr-2" /> Instagram</a></li>
                        <li><a href="#" className="hover:underline flex items-center"><Youtube className="w-5 h-5 mr-2" /> Youtube</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-[#8000ff] text-sm text-center">
                ©Fabrication, 2019. We love our users!
            </div>
        </footer>
    );
};

export default Footer; 