import { useState } from 'react';

function Navbar({ cartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#"
              className="text-2xl font-extrabold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"
            >
              DigiTools
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">
              Products
            </a>
            <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">
              Testimonials
            </a>
            <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">
              FAQ
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-gray-700 text-lg"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <a href="#" className="text-[#101727] hover:text-purple-700 text-sm font-medium">
              Login
            </a>
            <a
              href="#"
              className="bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Cart Icon Mobile */}
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-gray-700 text-lg"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <i className="fa-solid fa-xmark text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">Products</a>
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">Features</a>
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">Pricing</a>
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">Testimonials</a>
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">FAQ</a>
              <a href="#" className="text-[#101027] hover:text-purple-700 text-sm font-medium">Login</a>
              <a href="#" className="bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-purple-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;