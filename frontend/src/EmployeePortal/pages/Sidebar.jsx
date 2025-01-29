import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, User, Calendar, List, Users, DollarSign, Trophy, Plane } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: "dashboard", label: "Dashboard", icon: <Home size={24} /> },
    { path: "profile", label: "Profile", icon: <User size={24} /> },
    { path: "attendance", label: "Attendance", icon: <Calendar size={24} /> },
    { path: "tasks", label: "Tasks", icon: <List size={24} /> },
    { path: "meetings", label: "Meetings", icon: <Users size={24} /> },
    { path: "salary", label: "Salary", icon: <DollarSign size={24} /> },
    { path: "leaderboard", label: "Leaderboard", icon: <Trophy size={24} /> },
    { path: "leave", label: "Leave", icon: <Plane size={24} /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white h-screen shadow-md transform ${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 rounded-full focus:outline-none hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isSidebarOpen && (
            <h1 className="ml-4 text-xl font-bold whitespace-nowrap">
              EMP Portal
            </h1>
          )}
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path} // Use relative path
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                location.pathname.endsWith(item.path) ? "bg-gray-100" : ""
              }`}
            >
              {/* Icon should always be visible */}
              <span className="mr-3">{item.icon}</span>
              {isSidebarOpen && item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
    </div>
  );
}
