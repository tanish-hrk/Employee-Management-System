import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Users, Calendar, ClipboardList, Award } from 'lucide-react';

const Sidebar = ({ isDark, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', icon: Layout, path: '/admin' },
    { label: 'Employees', icon: Users, path: '/admin/employees' },
    { label: 'Meetings', icon: Calendar, path: '/admin/meetings' },
    { label: 'Tasks', icon: ClipboardList, path: '/admin/tasks' },
    { label: 'Categories', icon: Layout, path: '/admin/categories' },
    { label: 'Leaderboard', icon: Award, path: '/admin/leaderboard' },
  ];

  return (
    <aside
      className={`min-h-screen w-64 fixed bg-gray-900 text-white pt-16 ${
        isDark ? 'dark' : ''
      }`}
    >
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              navigate(item.path);
              setCurrentPage(item.path);
            }}
            className={`flex items-center w-full px-6 py-3 ${
              currentPage === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
