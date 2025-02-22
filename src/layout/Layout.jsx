import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link to="/">Hamza Dilpazeer</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <MdOutlineClose /> : <CiMenuBurger />}
          </button>

          {/* Navigation Links (Hidden on small screens, shown on larger screens) */}
          <nav className="hidden sm:flex flex-row space-x-6">
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/experience"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              to="/skill"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Links */}
        <nav
          className={`sm:hidden flex flex-col items-start bg-blue-600 px-6 py-4 space-y-4 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/experience"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Experience
          </Link>
          <Link
            to="/skill"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © 2024 Hamza Dilpazeer. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
