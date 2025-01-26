import React from 'react';
import { Bell } from 'lucide-react';

const EmployeeCard = ({ rank, name, role, points, color }) => (
  <div className="relative">
    <div className={`absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-${color} text-white text-sm`}>
      {rank}
    </div>
    <div className="flex flex-col items-center p-4">
      <div className={`w-16 h-16 rounded-full border-2 border-${color} flex items-center justify-center mb-2`}>
        <div className="w-12 h-12 rounded-full bg-purple-200"></div>
      </div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
      <p className="text-amber-500 font-bold mt-1">{points} Points</p>
    </div>
  </div>
);

const RankingsTable = ({ employees }) => (
  <div className="bg-white rounded-lg p-6 mt-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Employee Rankings</h2>
      <div className="relative">
        <select className="appearance-none bg-transparent pr-8 py-2 text-gray-600 focus:outline-none">
          <option>This Month</option>
        </select>
      </div>
    </div>
    
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-600">
          <th className="pb-4">RANK</th>
          <th className="pb-4">EMPLOYEE</th>
          <th className="pb-4">DEPARTMENT</th>
          <th className="pb-4">TASKS COMPLETED</th>
          <th className="pb-4">ATTENDANCE</th>
          <th className="pb-4">POINTS</th>
          <th className="pb-4">TREND</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id} className={employee.rank === 1 ? "bg-amber-50" : "hover:bg-gray-50"}>
            <td className="py-4">{employee.rank}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-200"></div>
                <div>
                  <div className="font-semibold">{employee.name}</div>
                  <div className="text-sm text-gray-500">{employee.email}</div>
                </div>
              </div>
            </td>
            <td>{employee.department}</td>
            <td>{employee.tasksCompleted}</td>
            <td>{employee.attendance}%</td>
            <td className="font-semibold">{employee.points}</td>
            <td>
              <span className={`${
                employee.trend > 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {employee.trend > 0 ? '↑' : '↓'} {Math.abs(employee.trend)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Dashboard = () => {
  const topEmployees = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      points: 98,
      rank: 1,
      color: 'amber-400'
    },
    {
      name: 'Mike Smith',
      role: 'UI Designer',
      points: 92,
      rank: 2,
      color: 'gray-400'
    },
    {
      name: 'Alex Brown',
      role: 'Product Manager',
      points: 85,
      rank: 3,
      color: 'amber-700'
    }
  ];

  const employees = [
    {
      id: 1,
      rank: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      department: 'Development',
      tasksCompleted: 45,
      attendance: 98,
      points: 98,
      trend: 2
    },
    {
      id: 2,
      rank: 2,
      name: 'Mike Smith',
      email: 'mike@example.com',
      department: 'Design',
      tasksCompleted: 42,
      attendance: 95,
      points: 92,
      trend: -1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Leaderboard</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <div className="w-10 h-10 rounded-full bg-purple-200"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-3 gap-8">
            {topEmployees.map((employee) => (
              <EmployeeCard key={employee.name} {...employee} />
            ))}
          </div>
        </div>

        <RankingsTable employees={employees} />
      </div>
    </div>
  );
};

export default Dashboard;