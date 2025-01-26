import React from 'react';
import { Bell, Clock, Plus } from 'lucide-react';

const Tasks = () => {
  const pendingTasks = [
    {
      id: 1,
      title: "Website Redesign",
      assignedTo: "John Doe",
      dueDate: "Dec 25, 2023",
      description: "Complete the homepage redesign with new brand guidelines.",
      status: "In Progress",
      timeLeft: "2 days left"
    }
  ];

  const completedTasks = [
    {
      id: 2,
      title: "Database Optimization",
      assignedTo: "Jane Smith",
      completedDate: "Dec 20, 2023",
      description: "Optimize database queries for better performance.",
      status: "Completed"
    }
  ];

  const statistics = {
    pending: 8,
    inProgress: 12,
    completed: 24
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Task Assignment</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 rounded-lg border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600" />
            <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Main Content - 3 columns */}
          <div className="col-span-3 space-y-6">
            {/* Pending Tasks Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Pending Tasks</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                  <Plus className="w-4 h-4" />
                  Assign New Task
                </button>
              </div>
              
              {pendingTasks.map(task => (
                <div key={task.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{task.title}</h3>
                      <p className="text-gray-600">Assigned to: {task.assignedTo}</p>
                      <p className="text-gray-600">Due Date: {task.dueDate}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {task.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{task.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{task.timeLeft}</span>
                    </div>
                    <div className="space-x-3">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Completed Tasks Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Completed Tasks</h2>
              {completedTasks.map(task => (
                <div key={task.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{task.title}</h3>
                      <p className="text-gray-600">Assigned to: {task.assignedTo}</p>
                      <p className="text-gray-600">Completed: {task.completedDate}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {task.status}
                    </span>
                  </div>
                  <p className="text-gray-700">{task.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Sidebar - 1 column */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Task Statistics</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Pending</span>
                    <span>{statistics.pending}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>In Progress</span>
                    <span>{statistics.inProgress}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Completed</span>
                    <span>{statistics.completed}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;