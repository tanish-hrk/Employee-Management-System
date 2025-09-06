// File: src/pages/Dashboard.jsx
import { Bell, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Card base components
// eslint-disable-next-line react/prop-types
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    attendanceRate: 92
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // In a real app, you'd fetch from actual endpoints
      // For now, we'll use mock data
      setStats({
        totalTasks: 12,
        completedTasks: 8,
        pendingTasks: 4,
        attendanceRate: 92
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };
  // Mock data for the attendance boxes
  // const attendanceData = [
  //   { status: 'present' },
  //   { status: 'present' },
  //   { status: 'absent' },
  //   { status: 'present' },
  //   { status: 'present' },
  //   { status: 'half' },
  //   { status: 'present' },
  // ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="w-10 h-10 rounded-full bg-orange-300"></div>
        </div>
      </div>

      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Profile Card */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-orange-300"></div>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-600">Senior Developer</p>
              <p className="text-gray-600 text-sm">ID: EMP001</p>
            </div>
          </div>
        </Card>

        {/* Attendance Card */}
        {/* <Card className="p-4"> */}
        <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold">{stats.attendanceRate}%</p>
            </div>
            <TrendingUp className="w-6 h-6 text-yellow-600" />
          </div>
        {/* </Card> */}

        {/* Task Progress Card */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Task Progress</h3>
          <p className="text-gray-600 mb-2">{stats.completedTasks}/{stats.totalTasks} Complete</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{width: `${(stats.completedTasks/stats.totalTasks)*100}%`}}></div>
          </div>
        </Card>

        {/* Pending Tasks Card */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Pending Tasks</h3>
          <p className="text-2xl font-bold text-red-500">{stats.pendingTasks}</p>
          <p className="text-gray-600">Need Attention</p>
        </Card>
      </div>

      {/* Bottom Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Tasks Card */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Recent Tasks</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">UI Design Review</h4>
                <p className="text-gray-600 text-sm">Due: Tomorrow</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                In Progress
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">API Integration</h4>
                <p className="text-gray-600 text-sm">Due: Next Week</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Pending
              </span>
            </div>
          </div>
        </Card>

        {/* Upcoming Meetings Card */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Upcoming Meetings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Team Sync</h4>
                <p className="text-gray-600 text-sm">Today, 2:00 PM</p>
                <p className="text-gray-600 text-sm">ID: MEET-001</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Join
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Project Review</h4>
                <p className="text-gray-600 text-sm">Tomorrow, 10:00 AM</p>
                <p className="text-gray-600 text-sm">ID: MEET-002</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Join
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}