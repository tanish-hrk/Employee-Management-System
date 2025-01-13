import React from 'react';
import { useNavigate } from "react-router-dom";

const Employee = () => {
    const navigate = useNavigate();
  
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Senior Developer',
      department: 'IT',
      status: 'Active',
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Employee Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <span className="text-xl">+</span>
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Department Select */}
          <select className="min-w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
          </select>

          {/* Position Select */}
          <select className="min-w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Positions</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>

          {/* Status Select */}
          <select className="min-w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b">
          <div className="font-medium">Employee</div>
          <div className="font-medium">Position</div>
          <div className="font-medium">Department</div>
          <div className="font-medium">Status</div>
          <div className="font-medium">Actions</div>
        </div>

        {/* Table Body */}
        {employees.map(employee => (
          <div key={employee.id} className="grid grid-cols-5 gap-4 p-4 border-b items-center hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium cursor-pointer" onClick={() => navigate('/admin/employeeprofile')}>
                {employee.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium cursor-pointer" onClick={() => navigate('/admin/employeeprofile')}>{employee.name}</div>
                <div className="text-sm text-gray-500" >{employee.email}</div>
              </div>
            </div>
            <div>{employee.position}</div>
            <div>{employee.department}</div>
            <div>
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                {employee.status}
              </span>
            </div>
            <div className="space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;