import { PenSquare } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API requests

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Tasks</h1>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Tasks" value={tasks.length} subtitle="This Month" />
        <StatCard
          title="Completed"
          value={tasks.filter((task) => task.status === "Completed").length}
          subtitle="Success Rate"
          valueColor="text-green-500"
        />
        <StatCard
          title="In Progress"
          value={tasks.filter((task) => task.status === "In Progress").length}
          subtitle="Due This Week"
          valueColor="text-yellow-500"
        />
        <StatCard
          title="Pending"
          value={tasks.filter((task) => task.status === "Pending").length}
          subtitle="Needs Attention"
          valueColor="text-red-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task Update Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Submit Task Update</h2>
          <TaskUpdateForm addTask={addTask} />
        </div>

        {/* Current Tasks */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Current Tasks</h2>
            <select className="border rounded-md px-3 py-1 text-gray-600">
              <option>All Tasks</option>
            </select>
          </div>
          <TaskList tasks={tasks} />
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

const TaskUpdateForm = ({ addTask }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTask = {
      taskTitle: formData.get("taskTitle"),
      status: formData.get("status"),
      hoursSpent: formData.get("hoursSpent"),
      progressUpdate: formData.get("progressUpdate"),
    };

    try {
      // Optionally, send data to the server
      const response = await axios.post("http://localhost:5000/user/tasks", newTask, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        addTask(newTask); // Add the new task to the task list
        alert("Task submitted successfully!");
      } else {
        alert("Task submission failed.");
      }
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Failed to submit task. Please check the server.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-600 mb-2">Task Title</label>
        <select
          name="taskTitle"
          className="w-full border rounded-lg p-2 text-gray-600"
          required
        >
          <option value="" disabled selected>
            Select Task
          </option>
          <option value="UI Design Review">UI Design Review</option>
          <option value="API Integration">API Integration</option>
          <option value="Backend Complete">Backend Complete</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600 mb-2">Status</label>
        <select
          name="status"
          className="w-full border rounded-lg p-2 text-gray-600"
          required
        >
          <option value="" disabled selected>
            Select Status
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600 mb-2">Hours Spent</label>
        <input
          name="hoursSpent"
          type="number"
          min="0"
          placeholder="Enter hours spent"
          className="w-full border rounded-lg p-2 text-gray-400"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-2">Progress Update</label>
        <textarea
          name="progressUpdate"
          placeholder="Enter your progress update and any challenges faced"
          className="w-full border rounded-lg p-2 h-24 text-gray-400 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Submit Update
      </button>
    </form>
  );
};

const TaskList = ({ tasks }) => (
  <div className="space-y-4">
    {tasks.map((task, index) => (
      <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium"><strong>Title: </strong> {task.taskTitle}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              task.status === "Completed"
                ? "bg-green-100 text-green-800"
                : task.status === "In Progress"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {task.status}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          <strong>Hours Spent:</strong> {task.hoursSpent}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <strong>Progress:</strong> {task.progressUpdate}
        </p>
      </div>
    ))}
  </div>
);

export default Tasks;
