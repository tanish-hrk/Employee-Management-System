import React from 'react';
import { Mail, Bell } from 'lucide-react';

const EmployeeProfile = () => {
  const employee = {
    name: "John Doe",
    position: "Senior Developer",
    status: ["Full-time", "Active", "IT Department"],
    avatar: "/api/placeholder/96/96",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateJoined: "January 15, 2022",
    employeeId: "EMP001",
    skills: ["JavaScript", "React", "Node.js", "SQL", "Git"],
    attendance: {
      present: 92,
      late: 5,
      absent: 3
    },
    progress: {
      tasksCompleted: 85,
      projectGoals: 78
    },
    salary: {
      base: 85000,
      lastPayment: "December 31, 2023",
      paymentMethod: "Direct Deposit"
    },
    notifications: [
      {
        message: "New task assigned: Website Redesign",
        time: "2 hours ago",
        type: "task"
      },
      {
        message: "Performance review completed",
        time: "1 day ago",
        type: "review"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">EMS Admin</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <img src={employee.avatar} alt="Admin" className="w-8 h-8 rounded-full" />
          </div>
        </div> */}

        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={employee.avatar} alt={employee.name} className="w-24 h-24 rounded-full" />
              <div>
                <h2 className="text-2xl font-semibold">{employee.name}</h2>
                <p className="text-gray-600">{employee.position}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {employee.status[0]}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {employee.status[1]}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {employee.status[2]}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                <Mail className="w-4 h-4" />
                Message
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Email</p>
                <p>{employee.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <p>{employee.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Date Joined</p>
                <p>{employee.dateJoined}</p>
              </div>
              <div>
                <p className="text-gray-600">Employee ID</p>
                <p>{employee.employeeId}</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Attendance Overview */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Attendance Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Present</span>
                    <span>{employee.attendance.present}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${employee.attendance.present}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Late</span>
                    <span>{employee.attendance.late}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${employee.attendance.late}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Absent</span>
                    <span>{employee.attendance.absent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${employee.attendance.absent}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Progress */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Current Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Tasks Completed</span>
                    <span>{employee.progress.tasksCompleted}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${employee.progress.tasksCompleted}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Project Goals</span>
                    <span>{employee.progress.projectGoals}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${employee.progress.projectGoals}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Salary Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Salary Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Base Salary</p>
                  <p className="text-xl font-semibold">${employee.salary.base.toLocaleString()}/year</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Payment</p>
                  <p>{employee.salary.lastPayment}</p>
                </div>
                <div>
                  <p className="text-gray-600">Payment Method</p>
                  <p>{employee.salary.paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
              <div className="space-y-4">
                {employee.notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'task' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {notification.type === 'task' ? (
                        <div className="w-4 h-4 text-blue-600">📋</div>
                      ) : (
                        <div className="w-4 h-4 text-green-600">✓</div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;