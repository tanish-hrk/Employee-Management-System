import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function Login({ setIsAuthenticated }) {
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await axios.post('http://localhost:3000/user/login', {
        employeeId,
        password,
        rememberMe
      })
      
      setIsAuthenticated(true)
      navigate("/employee/dashboard")
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed, please try again!"
      alert(errorMessage)
    }
  }

  const handleForgotPassword = () => {
    navigate("/forgot-password")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Employee Portal</h2>
        <div className="space-y-4">
          <div className="flex justify-center space-x-4 mb-8">
            <Link 
              to="/employee/login"
              className="px-4 py-2 bg-gray-100 rounded font-medium"
            >
              Login
            </Link>
            <Link 
              to="/employee/signup"
              className="px-4 py-2 hover:bg-gray-100 rounded font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="Enter your employee ID"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}