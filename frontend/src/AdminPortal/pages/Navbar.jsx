import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon, Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 px-6 py-4 transition-all duration-300 shadow-md rounded-b-2xl backdrop-blur-sm ${
        isScrolled ? 'w-[60%] max-w-lg left-1/2 transform -translate-x-1/2 top-2 py-2 px-4 rounded-full backdrop-blur-lg bg-opacity-80' : 'w-full top-0 py-4 px-6 backdrop-blur-md bg-opacity-100'
      } ${isDark ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">EMS</h1>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className={`pl-10 pr-4 py-2 rounded-full focus:outline-none transition-all duration-200 text-sm ${
                isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
              }`}
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-300 transition-all"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-900" />}
          </button>
          <Bell
            className="h-5 w-5 cursor-pointer hover:text-blue-500 transition-all"
            onClick={() => navigate('/admin/notification')}
          />
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate('/admin/adminprofile')}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
