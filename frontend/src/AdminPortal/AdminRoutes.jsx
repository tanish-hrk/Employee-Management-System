import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Meeting from './pages/Meeting'
import Tasks from './pages/Tasks'
import Categories from './pages/Categories'
import Notification from './pages/Notification'
import Leaderboard from './pages/Leaderboard'
import AdminProfile from './pages/Adminprofile'
import EmployeeProfile from './pages/EmployeeProfile'
import Login from './pages/Auth'
import AppLayout from './pages/AppLayout'

// Protected Route Component
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}

// Protected Layout Component
const ProtectedLayout = ({ children, isDark, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }
  return <AppLayout isDark={isDark}>{children}</AppLayout>
}

const AdminRoutes = ({ isDark, isAuthenticated }) => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={
        isAuthenticated ? 
        <Navigate to="/admin/dashboard" replace /> : 
        <Login isDark={isDark} />
      } />

      {/* Protected Routes */}
      <Route path="/*" element={
        <ProtectedLayout isDark={isDark} isAuthenticated={isAuthenticated}>
          <Routes>
            <Route path="dashboard" element={<Dashboard isDark={isDark} />} />
            <Route path="employees" element={<Employee isDark={isDark} />} />
            <Route path="meetings" element={<Meeting isDark={isDark} />} />
            <Route path="tasks" element={<Tasks isDark={isDark} />} />
            <Route path="categories" element={<Categories isDark={isDark} />} />
            <Route path="leaderboard" element={<Leaderboard isDark={isDark} />} />
            <Route path="adminprofile" element={<AdminProfile isDark={isDark} />} />
            <Route path="notification" element={<Notification isDark={isDark} />} />
            <Route path="employeeprofile" element={<EmployeeProfile isDark={isDark} />} />
            {/* Redirect from root to dashboard */}
            <Route path="" element={<Navigate to="dashboard" replace />} />
            {/* Catch all undefined routes */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </ProtectedLayout>
      } />
    </Routes>
  )
}

export default AdminRoutes