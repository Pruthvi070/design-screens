import { useState } from "react"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import Navbar from './Navbar';
import Footer from './Footer';

// Google Fonts import for Inter
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
        }, 1500)
    }

    return (
        <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar />
            
            {/* Header Banner */}
            <div className="bg-[#8000ff] py-12 relative overflow-hidden flex flex-col items-center">
                <div className="absolute left-0 top-0 w-32 h-32 opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                        {Array.from({ length: 6 }).map((_, i) => (
                            Array.from({ length: 6 }).map((_, j) => (
                                <circle key={i + '-' + j} cx={j * 18 + 8} cy={i * 18 + 8} r="2.5" fill="#fff" />
                            ))
                        ))}
                    </svg>
                </div>
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center z-10">Contact Us</h1>
                <div className="absolute right-0 top-0 w-32 h-32 opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                        {Array.from({ length: 6 }).map((_, i) => (
                            Array.from({ length: 6 }).map((_, j) => (
                                <circle key={i + '-' + j} cx={j * 18 + 8} cy={i * 18 + 8} r="2.5" fill="#fff" />
                            ))
                        ))}
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
                {/* Left Column */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#8000ff] mb-6">Let's talk</h2>
                    <p className="text-gray-600 mb-10 max-w-md">We collaborate with thousands of creators, entrepreneurs and complete legends.</p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#8000ff] flex items-center justify-center">
                                <Mail className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Our email</h3>
                                <p className="text-gray-600">hello@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#8000ff] flex items-center justify-center">
                                <Phone className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Call us</h3>
                                <p className="text-gray-600">+123 456 7892</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#8000ff] flex items-center justify-center">
                                <MapPin className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Find us</h3>
                                <p className="text-gray-600">Open Google Maps</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a
                            href="#"
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <Facebook className="w-4 h-4 text-gray-600" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <Instagram className="w-4 h-4 text-gray-600" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <Linkedin className="w-4 h-4 text-gray-600" />
                        </a>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="md:w-1/2 flex items-center">
                    <form onSubmit={handleSubmit} className="bg-[#f3ebfa] p-8 rounded-xl w-full shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 mb-2">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#8000ff] bg-transparent p-2 focus:outline-none focus:border-[#4b006e] transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-gray-700 mb-2">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#8000ff] bg-transparent p-2 focus:outline-none focus:border-[#4b006e] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#8000ff] bg-transparent p-2 focus:outline-none focus:border-[#4b006e] transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border-b border-[#8000ff] bg-transparent p-2 focus:outline-none focus:border-[#4b006e] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full border-b border-[#8000ff] bg-transparent p-2 focus:outline-none focus:border-[#4b006e] transition-colors resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-[#8000ff] to-[#4b006e] text-white px-8 py-3 rounded-full hover:from-[#4b006e] hover:to-[#8000ff] transition-all font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8000ff] disabled:opacity-70"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Now"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full flex justify-center mb-12">
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.69062784744!2d-74.013119!3d40.712728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c9b1b09:0x8c1bfae16a3a836b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1717430000000!5m2!1sen!2sus"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage
