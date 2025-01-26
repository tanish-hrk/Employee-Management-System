const Attendance = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const attendanceData = Array(12).fill(Array(31).fill(0)); // 0: No attendance, 1-4: Level of attendance

  // Example of mock attendance
  attendanceData[10][15] = 2; // Example: November 16 has moderate attendance
  attendanceData[10][16] = 4; // Example: November 17 has high attendance

  const getColor = (value) => {
    switch (value) {
      case 0:
        return "bg-gray-800"; // No attendance
      case 1:
        return "bg-green-200"; // Low
      case 2:
        return "bg-green-400"; // Moderate
      case 3:
        return "bg-green-600"; // High
      case 4:
        return "bg-green-800"; // Very high
      default:
        return "bg-gray-800";
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Attendance Record</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Total Working Days</h2>
          <p className="text-3xl font-bold">22/23</p>
          <p className="text-green-500">95.6% Attendance Rate</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">On Time Arrival</h2>
          <p className="text-3xl font-bold">20 Days</p>
          <p className="text-green-500">90% Punctuality Rate</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Leave Balance</h2>
          <p className="text-3xl font-bold">12 Days</p>
          <p className="text-gray-500">Annual Leave Remaining</p>
        </div>
      </div>

      {/* Attendance Contribution Section */}
    <div className="p-4 bg-gray-900 text-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Attendance Contribution</h2>
      <div className="flex items-center justify-between text-xs mb-2">
        <span>5 submissions in the past one year</span>
        <span>Total active days: 4 | Max streak: 1</span>
      </div>
      <div className="grid grid-cols-12 gap-2">
        {months.map((month, monthIndex) => (
          <div key={monthIndex} className="flex flex-col items-center">
            <span className="text-gray-400 mb-1">{month}</span>
            <div className="grid grid-cols-7 gap-1">
              {attendanceData[monthIndex].map((value, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded ${getColor(value)}`}
                  title={`Day ${dayIndex + 1}: Level ${value}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Recent Attendance Log */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-gray-700 mb-4">Recent Attendance Log</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4">Date</th>
              <th className="border-b py-2 px-4">Check In</th>
              <th className="border-b py-2 px-4">Check Out</th>
              <th className="border-b py-2 px-4">Work Hours</th>
              <th className="border-b py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">2025-01-01</td>
              <td className="py-2 px-4">09:00</td>
              <td className="py-2 px-4">18:00</td>
              <td className="py-2 px-4">8h</td>
              <td className="py-2 px-4">Present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
