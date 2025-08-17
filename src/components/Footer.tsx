// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top footer grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400 text-sm">
                            We provide high-quality courses and batches to help students excel in their careers.
                            Learn from the best instructors and join our growing community.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Batches</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Popular Courses</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">CSAT</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">UPSC Prelims</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">UPSC Mains</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Optional Subjects</a></li>
                        </ul>

                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: support@example.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: 123 Main Street, City, India</li>
                        </ul>
                        <form className="flex items-center bg-gray-100 rounded-lg overflow-hidden mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-black outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 text-gray-800 font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Your Website. All rights reserved.
                    </p>
                    <a
                        href="#"
                        className="mt-4 md:mt-0 inline-block bg-yellow-500 text-black px-5 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
                    >
                        Get More Batches
                    </a>
                </div>
            </div>
        </footer>
    );
}
