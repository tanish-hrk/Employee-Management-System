import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Admin/Component/Auth';
import AppLayout from './Admin/Component/AppLayout';
import AdminRoutes from './Admin/AdminRoutes';
// import Sidebar from './Admin/Component/Sidebar';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('/admin');

  const toggleTheme = () => setIsDark(!isDark);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <AppLayout isDark={isDark} toggleTheme={toggleTheme}>
        <AdminRoutes isDark={isDark} />
      </AppLayout>
    </Router>
  );
};

export default App;
