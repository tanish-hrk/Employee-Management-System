import React from 'react'
import { Bell, Sun, Moon, Search, Users, Calendar, ClipboardList, Layout, Award, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = ({ isDark, toggleTheme }) => {
  const navigate = useNavigate();
    return (
      <nav className={`fixed w-full z-10 px-4 py-3 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">EMS Admin</h1>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className={`pl-10 pr-4 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                } focus:outline-none`}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Bell className="h-5 w-5" onClick={() => navigate('/admin/notification')}/>
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
              onClick={() => navigate('/admin/adminprofile')}
            />
          </div>
        </div>
      </nav>
    );
  };

export default Navbar
