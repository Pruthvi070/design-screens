import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'text-[#8000ff] font-semibold' : 'text-gray-600 hover:text-[#8000ff]';
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center h-16">
                    {/* Logo - Left */}
                    <div className="flex justify-start">
                        <Link to="/" className="flex items-center">
                            <div className="w-10 h-10 bg-[#8000ff] rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                            </div>
                            <span className="ml-2 text-xl font-semibold text-[#8000ff]">EleAutomation</span>
                        </Link>
                    </div>

                    {/* Navigation - Center */}
                    <div className="hidden md:flex justify-center">
                        <div className="flex space-x-8">
                            <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
                            <Link to="/aboutus" className={`${isActive('/aboutus')} transition-colors`}>About US</Link>
                            <Link to="/services" className={`${isActive('/services')} transition-colors`}>Services</Link>
                            <Link to="/projects" className={`${isActive('/projects')} transition-colors`}>Projects</Link>
                            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>Contact</Link>
                        </div>
                    </div>

                    {/* Request a Quote Button - Right (Desktop) */}
                    <div className="hidden md:flex justify-end">
                        <Link to="/quote" className="bg-[#8000ff] text-white px-4 py-2 rounded-full ml-6 font-semibold hover:bg-[#4b006e] transition-transform duration-200 transform hover:scale-105 shadow-md">
                            Request a Quote
                        </Link>
                    </div>

                    {/* Mobile menu button - Right */}
                    <div className="flex justify-end md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-[#8000ff] focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className={`block px-3 py-2 ${isActive('/')} transition-colors`}>Home</Link>
                        <Link to="/aboutus" className={`block px-3 py-2 ${isActive('/aboutus')} transition-colors`}>About US</Link>
                        <Link to="/services" className={`block px-3 py-2 ${isActive('/services')} transition-colors`}>Services</Link>
                        <Link to="/projects" className={`block px-3 py-2 ${isActive('/projects')} transition-colors`}>Projects</Link>
                        <Link to="/contact" className={`block px-3 py-2 ${isActive('/contact')} transition-colors`}>Contact</Link>
                        <Link to="/quote" className="block mt-4 bg-[#8000ff] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4b006e] transition-transform duration-200 transform hover:scale-105 shadow-md w-fit mx-auto text-center">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 