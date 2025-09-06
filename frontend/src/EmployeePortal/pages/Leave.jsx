import { useState, useEffect } from "react";
import axios from "axios";

const Leave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveBalances, setLeaveBalances] = useState({
    Annual: 32,
    Sick: 25,
    Personal: 17,
    Other: 24,
  });
  const [newLeave, setNewLeave] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  });

  // Load data from backend
  useEffect(() => {
    fetchLeaveData();
  }, []);

  const fetchLeaveData = async () => {
    try {
      // For now, we'll use mock data since we don't have GET endpoints
      setLeaveRequests([
        {
          id: 1,
          leaveType: 'Annual',
          startDate: '2025-01-15',
          endDate: '2025-01-20',
          reason: 'Family vacation',
          status: 'Approved'
        }
      ]);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    }
  };

  const submitLeaveRequest = async () => {
    if (!newLeave.leaveType || !newLeave.startDate || !newLeave.endDate || !newLeave.reason) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/user/leave`, newLeave, {
        withCredentials: true
      });
      
      console.log('Leave request submitted:', response.data);
      
      // Add to local state
      setLeaveRequests(prev => [...prev, { ...newLeave, id: Date.now(), status: 'Pending' }]);
      
      // Reset form
      setNewLeave({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error submitting leave request:', error);
      alert('Failed to submit leave request. Please try again.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Leave Portal</h1>
          <div className="flex gap-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Annual Leave"
            value={`${leaveBalances.Annual} Days`}
            subtitle="Available Balance"
            valueColor="text-blue-500"
          />
          <StatCard
            title="Sick Leave"
            value={`${leaveBalances.Sick} Days`}
            subtitle="Available Balance"
            valueColor="text-green-500"
          />
          <StatCard
            title="Personal Leave"
            value={`${leaveBalances.Personal} Days`}
            subtitle="Available Balance"
            valueColor="text-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Leave Request Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Leave</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Leave Type *
              </label>
              <select
                value={newLeave.leaveType}
                onChange={(e) => setNewLeave({...newLeave, leaveType: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select leave type</option>
                <option value="Annual">Annual Leave</option>
                <option value="Sick">Sick Leave</option>
                <option value="Personal">Personal Leave</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date *
                </label>
                <input
                  type="date"
                  value={newLeave.startDate}
                  onChange={(e) => setNewLeave({...newLeave, startDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date *
                </label>
                <input
                  type="date"
                  value={newLeave.endDate}
                  onChange={(e) => setNewLeave({...newLeave, endDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason *
              </label>
              <textarea
                value={newLeave.reason}
                onChange={(e) => setNewLeave({...newLeave, reason: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Please provide a reason for your leave request..."
              />
            </div>
            <button
              onClick={submitLeaveRequest}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Leave Request
            </button>
          </div>
        </div>          {/* Leave History */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Leave History</h2>
              <select className="border rounded-md px-3 py-1 text-gray-600">
                <option>All Leaves</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <LeaveHistory leaveRequests={leaveRequests} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, valueColor = "text-gray-900" }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-gray-600 font-medium">{title}</h3>
    <p className={`text-3xl font-semibold ${valueColor} mt-2`}>{value}</p>
    <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
  </div>
);

const LeaveHistory = ({ leaveRequests }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left text-gray-700">
          <th className="py-2">Type</th>
          <th className="py-2">From</th>
          <th className="py-2">To</th>
          <th className="py-2">Reason</th>
          <th className="py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {leaveRequests.map((request, index) => (
          <tr key={index} className="border-t">
            <td className="py-2">{request.leaveType}</td>
            <td className="py-2">{request.startDate}</td>
            <td className="py-2">{request.endDate}</td>
            <td className="py-2">{request.reason}</td>
            <td className="py-2">
              <span className={`px-2 py-1 rounded-full text-sm ${
                request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {request.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Leave;
