import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/profile", label: "Profile", icon: "👤" },
    { path: "/attendance", label: "Attendance", icon: "📅" },
    { path: "/tasks", label: "Tasks", icon: "📝" },
    { path: "/meetings", label: "Meetings", icon: "👥" },
    { path: "/salary", label: "Salary", icon: "💰" },
    { path: "/leaderboard", label: "Leaderboard", icon: "🏆" },
    { path: "/leave", label: "Leave", icon: "✈️" },
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
        {isSidebarOpen && (
          <nav className="mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  location.pathname === item.path ? "bg-gray-100" : ""
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
    </div>
  );
}
