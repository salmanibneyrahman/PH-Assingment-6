function Footer() {
    return (
        <>
            {/* CTA Section */}
            <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready To Transform Your Workflow?
                    </h2>
                    <p className="text-purple-200 max-w-2xl mx-auto mb-8 text-sm md:text-base">
                        Join thousands of professionals who are already using DigiTools to work smarter.
                        Start your free trial today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a
                            href="#products"
                            className="bg-white text-purple-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-500 transition"
                        >
                            Explore Products
                        </a>
                        <a
                            href="#"
                            className="bg-transparent border border-purple-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition"
                        >
                            View Pricing
                        </a>
                    </div>
                    <p className="text-purple-300 text-xs">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <h3 className="text-white text-2xl font-bold mb-3">DigiTools</h3>
                            <p className="text-sm leading-relaxed">
                                Premium digital tools for creators, professionals, and businesses. Work smarter
                                with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">Features</a></li>
                                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition">Press</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition">Community</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Social Links</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                                    <i className="fa-brands fa-instagram text-gray-800 text-sm"></i>
                                </a>
                                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                                    <i className="fa-brands fa-facebook text-gray-800 text-sm"></i>
                                </a>
                                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                                    <i className="fa-brands fa-x-twitter text-gray-800 text-sm"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>© 2026 Digitools. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                            <a href="#" className="hover:text-white transition">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;