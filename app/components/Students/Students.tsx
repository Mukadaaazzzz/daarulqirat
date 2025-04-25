const ContactSection = () => {
    return (
        <section id="contact-us" className="bg-white py-16 px-6 sm:px-8 lg:px-12 border-t border-amber-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We welcome you to visit, call, or join our virtual or in-person classes. Whether you’re just beginning or deepening your journey, our doors—and hearts—are open.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-6 text-gray-700">
                        <h3 className="text-xl font-semibold text-amber-600">Our Location</h3>
                        <p>
                            <strong>5b, Tarmac Road, Adalemo,</strong><br />
                            Sango Ota, Ogun State, Nigeria
                        </p>

                        <h3 className="text-xl font-semibold text-amber-600">Contact Numbers</h3>
                        <p>
                            <a href="tel:+2349029887690" className="block hover:underline">+234 902 988 7690</a>
                            <a href="tel:+2349054610771" className="block hover:underline">+234 905 461 0771</a>
                        </p>

                        <h3 className="text-xl font-semibold text-amber-600">Modes of Learning</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>📍 On-site physical classes</li>
                            <li>🕓 Weekend & flexible schedules</li>
                            <li>🏫 Boarding & personalized arrangements available</li>
                            <li>💻 Virtual classes via Zoom & Google Meet</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-amber-600">Availability</h3>
                        <p>
                            We accommodate learners of all ages and backgrounds. Whether you’re nearby or across the world, there’s a space for you in our learning community.
                        </p>
                    </div>

                    <div className="bg-amber-50 p-8 rounded-xl shadow-sm space-y-6">
                        <h4 className="text-2xl font-bold text-gray-800">Ready to Start?</h4>
                        <p className="text-gray-700">
                            Reach out to begin your journey of Quranic memorization, Tajweed mastery, Arabic fluency, or Islamic scholarship with us.
                        </p>
                        <div>
                            <a
                                href="https://wa.me/2349029887690"
                                className="inline-block bg-amber-600 hover:bg-amber-700 text-black font-medium px-6 py-3 rounded-lg transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Message Us on WhatsApp
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
