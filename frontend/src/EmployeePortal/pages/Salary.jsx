import { Bell } from 'lucide-react';

const SalaryDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Salary Record</h1>
        <div className="flex gap-4 items-center">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Monthly Salary" 
          value="$5,240" 
          subtitle={<span className="text-green-500">+5% from last month</span>} 
        />
        <StatCard 
          title="Year to Date" 
          value="$31,440" 
          subtitle="6 months" 
        />
        <StatCard 
          title="Bonuses" 
          value="$2,500" 
          subtitle="This Year" 
        />
        <StatCard 
          title="Deductions" 
          value="$750" 
          subtitle="This Month" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment History */}
        <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Payment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="pb-4">DATE</th>
                  <th className="pb-4">TYPE</th>
                  <th className="pb-4">AMOUNT</th>
                  <th className="pb-4">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <PaymentRow date="Feb 01, 2024" type="Salary" amount="$5,240" />
                <PaymentRow date="Jan 01, 2024" type="Salary" amount="$5,000" />
                <PaymentRow date="Dec 25, 2023" type="Bonus" amount="$1,000" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Salary Breakdown</h2>
          <div className="space-y-4">
            <SalaryBreakdownItem 
              label="Base Salary" 
              amount="$4,500" 
              percentage={100} 
              color="bg-green-500" 
            />
            <SalaryBreakdownItem 
              label="Overtime" 
              amount="$340" 
              percentage={20} 
              color="bg-blue-500" 
            />
            <SalaryBreakdownItem 
              label="Allowances" 
              amount="$400" 
              percentage={25} 
              color="bg-yellow-500" 
            />
            <SalaryBreakdownItem 
              label="Deductions" 
              amount="-$750" 
              percentage={30} 
              color="bg-red-500" 
              negative 
            />
            <div className="pt-4 mt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Net Salary</span>
                <span className="font-semibold text-xl">$5,240</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-gray-600 font-medium">{title}</h3>
    <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
    <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
  </div>
);

const PaymentRow = ({ date, type, amount }) => (
  <tr className="border-b last:border-b-0">
    <td className="py-4 text-gray-600">{date}</td>
    <td className="py-4 text-gray-600">{type}</td>
    <td className="py-4 text-gray-900 font-medium">{amount}</td>
    <td className="py-4">
      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
        Paid
      </span>
    </td>
  </tr>
);

const SalaryBreakdownItem = ({ label, amount, percentage, color, negative }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-gray-600">{label}</span>
      <span className={negative ? "text-red-500" : "text-gray-900"}>{amount}</span>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SalaryDashboard;