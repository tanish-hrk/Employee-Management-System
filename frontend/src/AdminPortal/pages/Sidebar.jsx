import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Users, Calendar, ClipboardList, Award } from 'lucide-react';

const Sidebar = ({ isDark, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

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
      className={`min-h-screen w-64 fixed bg-gray-900 text-white pt-16 ${isDark ? 'dark' : ''}`}
    >
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setCurrentPage(item.path);
            }}
            className={`flex items-center w-full px-6 py-3 text-white ${
              currentPage === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            {/* Icon */}
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
