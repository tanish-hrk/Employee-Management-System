import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

export default function Login({ setIsAuthenticated }) {
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!employeeId || !password) {
  //     alert("Enter details first")
  //     return;
  //   }
  //   try {
  //       const data = { employeeId, password }
  //       const res = await axios.post('http://localhost:5000/user/login', data);
  //       navigate("/dashboard")
  //       setIsAuthenticated(true)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employeeId || !password) {
      alert("Enter details first");
      return;
    }
  
    try {
      const data = { employeeId, password };
      const res = await axios.post('http://localhost:5000/user/login', data);
  
      // Check if the response was successful
      if (res.status === 200) {
        setIsAuthenticated(true);
        navigate("/dashboard"); // Redirect to dashboard page
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.log("Error:", error);
  
      // Log more details about the error
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        console.log("Error details:", error.message);
        alert("Login failed, please try again!");
      }
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Employee Portal</h2>
        <div className="space-y-4">
          <div className="flex justify-center space-x-4 mb-8">
            <Link 
              to="/login"
              className="px-4 py-2 bg-gray-100 rounded font-medium"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="px-4 py-2 hover:bg-gray-100 rounded font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" method="post">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                name="employeeId"
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
                name="password"
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
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800"
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
