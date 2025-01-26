import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'  // Add this import
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import Tasks from './pages/Tasks'
import Meetings from './pages/Meetings'
import Salary from './pages/Salary'
import Leaderboard from './pages/Leaderboard'
import Leave from './pages/Leave'
import ProfilePage from './pages/Profile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={ 
              <Login setIsAuthenticated={setIsAuthenticated} />  
          } 
        />
        <Route 
          path="/signup" 
          element={
            !isAuthenticated ? (
              <Signup setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        <Route
          path="/"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="salary" element={<Salary />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="leave" element={<Leave />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

// File: src/pages/Login.jsx
