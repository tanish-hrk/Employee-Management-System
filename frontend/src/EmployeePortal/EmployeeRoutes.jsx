import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout"; // Adjust the path if needed
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Tasks from "./pages/Tasks";
import Meetings from "./pages/Meetings";
import Salary from "./pages/Salary";
import Leaderboard from "./pages/Leaderboard";
import Leave from "./pages/Leave";
import ProfilePage from "./pages/Profile";
import { SocketProvider } from "./context/SocketContext";

function EmployeeRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <SocketProvider>
      <Routes>
        {/* Login Route */}
        <Route
          path="login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Signup Route */}
        <Route
          path="signup"
          element={
            !isAuthenticated ? (
              <Signup setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/employee/login" replace />
            )
          }
        />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="salary" element={<Salary />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="leave" element={<Leave />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/employee/login" replace />} />
        )}
      </Routes>
    </SocketProvider>
  );
}

export default EmployeeRoutes;
