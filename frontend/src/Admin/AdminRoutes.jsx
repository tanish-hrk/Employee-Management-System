import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Employee from './Component/Employee';
import Meeting from './Component/Meeting';
import Tasks from './Component/Tasks';
import Categories from './Component/Categories';
import Notification from './Component/Notification';
import Leaderboard from './Component/Leaderboard';
import AdminProfile from './Component/Adminprofile';
import EmployeeProfile from './Component/EmployeeProfile';

const AdminRoutes = ({ isDark }) => {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard isDark={isDark} />} />
      <Route path="/admin/employees" element={<Employee isDark={isDark} />} />
      <Route path="/admin/meetings" element={<Meeting isDark={isDark} />} />
      <Route path="/admin/tasks" element={<Tasks isDark={isDark} />} />
      <Route path="/admin/categories" element={<Categories isDark={isDark} />} />
      <Route path="/admin/leaderboard" element={<Leaderboard isDark={isDark} />} />
      <Route path="/admin/adminprofile" element={<AdminProfile isDark={isDark} />} />
      <Route path="/admin/notification" element={<Notification isDark={isDark} />} />
      <Route path="/admin/employeeprofile" element={<EmployeeProfile isDark={isDark} />} />
    </Routes>
  );
};

export default AdminRoutes;
