import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Users, Calendar, ClipboardList, Award, ChevronRight } from 'lucide-react';

const Sidebar = ({ isDark, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const menuItems = [
    { label: 'Dashboard', icon: <Layout size={24} />, path: '/admin' },
    { label: 'Employees', icon: <Users size={24} />, path: '/admin/employees' },
    { label: 'Meetings', icon: <Calendar size={24} />, path: '/admin/meetings' },
    { label: 'Tasks', icon: <ClipboardList size={24} />, path: '/admin/tasks' },
    { label: 'Categories', icon: <Layout size={24} />, path: '/admin/categories' },
    { label: 'Leaderboard', icon: <Award size={24} />, path: '/admin/leaderboard' },
  ];

  return (
    <aside
      className={`fixed min-h-screen bg-gray-900 text-white pt-16 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <nav className="flex flex-col items-start">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setCurrentPage(item.path);
            }}
            className={`flex items-center w-full px-4 py-3 text-white transition-all duration-300 ${
              currentPage === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            <span>{item.icon}</span>
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
