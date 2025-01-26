import React from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

const Categories = () => {
  const departments = [
    {
      name: "IT Department",
      memberCount: 15,
      categories: [
        {
          title: "Senior Developers",
          employees: [
            { name: "John Doe", experience: "5 years exp.", avatar: "/api/placeholder/40/40" }
          ]
        },
        {
          title: "Junior Developers",
          employees: [
            { name: "Jane Smith", experience: "2 years exp.", avatar: "/api/placeholder/40/40" }
          ]
        }
      ],
      badgeColor: "blue"
    },
    {
      name: "HR Department",
      memberCount: 8,
      categories: [
        {
          title: "HR Managers",
          employees: [
            { name: "Sarah Wilson", experience: "4 years exp.", avatar: "/api/placeholder/40/40" }
          ]
        }
      ],
      badgeColor: "green"
    },
    {
      name: "Marketing",
      memberCount: 12,
      categories: [
        {
          title: "Marketing Managers",
          employees: [
            { name: "Mike Johnson", experience: "3 years exp.", avatar: "/api/placeholder/40/40" }
          ]
        }
      ],
      badgeColor: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Employee Categories</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg p-4 mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search categories or employees..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 border rounded-lg bg-white flex items-center gap-2">
            All Departments
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-lg bg-white flex items-center gap-2">
            Sort By
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{dept.name}</h2>
                <span className={`px-3 py-1 rounded-full text-sm 
                  ${dept.badgeColor === 'blue' ? 'bg-blue-100 text-blue-800' : 
                    dept.badgeColor === 'green' ? 'bg-green-100 text-green-800' : 
                    'bg-purple-100 text-purple-800'}`}>
                  {dept.memberCount} Members
                </span>
              </div>

              {dept.categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-6">
                  <h3 className="text-gray-600 font-medium mb-4">{category.title}</h3>
                  {category.employees.map((employee, empIndex) => (
                    <div key={empIndex} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={employee.avatar}
                          alt={employee.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-gray-500">{employee.experience}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;