import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();         
  const topPerformers = [
    {
      name: "John Doe",
      position: "Senior Developer",
      avatar: "/api/placeholder/80/80",
      performance: 98,
      badgeColor: "gold",
      department: "IT",
      tasksCompleted: "45/48",
      attendance: "98%"
    },
    {
      name: "Sarah Wilson",
      position: "HR Manager",
      avatar: "/api/placeholder/80/80",
      performance: 95,
      badgeColor: "silver",
      department: "HR",
      tasksCompleted: "42/45",
      attendance: "96%"
    },
    {
      name: "Mike Johnson",
      position: "Marketing Lead",
      avatar: "/api/placeholder/80/80",
      performance: 92,
      badgeColor: "bronze",
      department: "Marketing",
      tasksCompleted: "40/44",
      attendance: "95%"
    }
  ];

  const performanceStats = {
    tasksCompleted: 95,
    attendance: 98,
    projectQuality: 92
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Employee Leaderboard</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 flex gap-4">
          <button className="px-4 py-2 border rounded-lg bg-white flex items-center gap-2">
            This Month
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-lg bg-white flex items-center gap-2">
            All Departments
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-lg bg-white flex items-center gap-2">
            Performance
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Top Performers Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {topPerformers.map((performer, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center">
              <div className="relative inline-block mb-4">
                <img 
                  src={performer.avatar}
                  alt={performer.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <div className={`absolute -top-2 -right-2 p-1 rounded-full
                  ${performer.badgeColor === 'gold' ? 'bg-yellow-400' :
                    performer.badgeColor === 'silver' ? 'bg-gray-400' :
                    'bg-orange-400'}`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{performer.name}</h3>
              <p className="text-gray-600 mb-4">{performer.position}</p>
              <div className={`text-3xl font-bold mb-2
                ${performer.badgeColor === 'gold' ? 'text-yellow-500' :
                  performer.badgeColor === 'silver' ? 'text-gray-500' :
                  'text-orange-500'}`}>
                {performer.performance}%
              </div>
              <p className="text-gray-600">Performance Score</p>
            </div>
          ))}

          {/* Performance Overview Card */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6">Performance Overview</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Tasks Completed</span>
                  <span>{performanceStats.tasksCompleted}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${performanceStats.tasksCompleted}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Attendance</span>
                  <span>{performanceStats.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${performanceStats.attendance}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Project Quality</span>
                  <span>{performanceStats.projectQuality}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full" 
                    style={{ width: `${performanceStats.projectQuality}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Employee</th>
                <th className="px-6 py-4 text-left">Department</th>
                <th className="px-6 py-4 text-left">Tasks Completed</th>
                <th className="px-6 py-4 text-left">Attendance</th>
                <th className="px-6 py-4 text-left">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topPerformers.map((employee, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        onClick={() => navigate('/admin/employeeprofile')}
                      />
                      <div>
                        <p className="font-medium cursor-pointer" onClick={() => navigate('/admin/employeeprofile')}>{employee.name}</p>
                        <p className="text-sm text-gray-500">{employee.position}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.tasksCompleted}</td>
                  <td className="px-6 py-4">{employee.attendance}</td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${employee.performance}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;