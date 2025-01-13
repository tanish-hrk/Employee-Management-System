import React from 'react';
import { Bell, Users, CheckSquare, Calendar, TrendingUp, Camera, Clock } from 'lucide-react';

const Dashboard = () => {
  const recentActivity = [
    { id: 1, user: "John Doe", action: "submitted a task report", time: "2 hours ago" },
    { id: 2, user: "Sarah Smith", action: "updated her profile", time: "4 hours ago" },
    { id: 3, user: "Michael Brown", action: "joined", time: "6 hours ago" },
  ];

  const upcomingMeetings = [
    { id: 1, title: "Project Review", time: "Today, 2:00 PM", type: "video" },
    { id: 2, title: "Team Sync", time: "Tomorrow, 10:00 AM", type: "regular" },
  ];

  const taskStats = {
    inProgress: 12,
    completed: 24,
    pending: 6,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-sm">A</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold">245</p>
            </div>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Tasks</p>
              <p className="text-2xl font-bold">42</p>
            </div>
            <CheckSquare className="w-6 h-6 text-green-600" />
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Meetings Today</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
            <TrendingUp className="w-6 h-6 text-yellow-600" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="bg-white shadow-md p-6 rounded-lg lg:col-span-2">
            <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">{activity.user[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Upcoming Meetings</h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      meeting.type === 'video' ? 'bg-blue-100' : 'bg-green-100'
                    }`}
                  >
                    {meeting.type === 'video' ? (
                      <Camera className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{meeting.title}</p>
                    <p className="text-sm text-gray-500">{meeting.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
