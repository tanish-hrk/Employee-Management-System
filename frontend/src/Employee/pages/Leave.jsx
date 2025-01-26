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

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedRequests = localStorage.getItem("leaveRequests");
    const savedBalances = localStorage.getItem("leaveBalances");

    if (savedRequests) setLeaveRequests(JSON.parse(savedRequests));
    if (savedBalances) setLeaveBalances(JSON.parse(savedBalances));
  }, []);

  // Save data to localStorage whenever leaveRequests or leaveBalances change
  useEffect(() => {
    localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
    localStorage.setItem("leaveBalances", JSON.stringify(leaveBalances));
  }, [leaveRequests, leaveBalances]);

  const addLeaveRequest = (newRequest) => {
    setLeaveRequests((prevRequests) => [...prevRequests, newRequest]);

    // Update the leave balance based on the leave type
    setLeaveBalances((prevBalances) => ({
      ...prevBalances,
      [newRequest.leaveType]:
        prevBalances[newRequest.leaveType] - newRequest.days,
    }));
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
            <LeaveRequestForm addLeaveRequest={addLeaveRequest} />
          </div>

          {/* Leave History */}
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

const LeaveRequestForm = ({ addLeaveRequest }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const startDate = new Date(formData.get("startDate"));
    const endDate = new Date(formData.get("endDate"));
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    const newRequest = {
      leaveType: formData.get("leaveType"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      reason: formData.get("reason"),
      days, // Add calculated days here
    };

    try {
      const response = await axios.post("http://localhost:5000/user/leave", newRequest, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        addLeaveRequest(newRequest);
        alert("Leave request submitted successfully!");
        e.target.reset();
      } else {
        alert("Leave request submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-600 mb-2">Leave Type</label>
        <select
          name="leaveType"
          className="w-full border rounded-lg p-2 text-gray-600"
          required
        >
          <option value="" disabled selected>Select Leave Type</option>
          <option value="Annual">Annual</option>
          <option value="Sick">Sick</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600 mb-2">Start Date</label>
        <input
          name="startDate"
          type="date"
          className="w-full border rounded-lg p-2 text-gray-600"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-2">End Date</label>
        <input
          name="endDate"
          type="date"
          className="w-full border rounded-lg p-2 text-gray-600"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-2">Reason</label>
        <textarea
          name="reason"
          placeholder="Please provide a reason for your leave request"
          className="w-full border rounded-lg p-2 h-24 text-gray-600 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Submit Request
      </button>
    </form>
  );
};

const LeaveHistory = ({ leaveRequests }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left text-gray-700">
          <th className="py-2">Type</th>
          <th className="py-2">From</th>
          <th className="py-2">To</th>
          <th className="py-2">Reason</th>
          <th className="py-2">Days</th>
        </tr>
      </thead>
      <tbody>
        {leaveRequests.map((request, index) => (
          <tr key={index} className="border-t">
            <td className="py-2">{request.leaveType}</td>
            <td className="py-2">{request.startDate}</td>
            <td className="py-2">{request.endDate}</td>
            <td className="py-2">{request.reason}</td>
            <td className="py-2">{request.days}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Leave;
