// src/components/AppLayout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AppLayout = ({ children, isDark, toggleTheme }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-6 ml-64 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;

