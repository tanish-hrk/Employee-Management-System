import { PenSquare } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    taskTitle: '',
    status: 'pending',
    hoursSpent: 0,
    progressUpdate: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      // For now, we'll use mock data since we don't have a GET endpoint
      // In a real app, you'd call: const response = await axios.get('http://localhost:3000/user/tasks');
      setTasks([
        {
          id: 1,
          taskTitle: 'UI Design Review',
          status: 'in-progress',
          hoursSpent: 2,
          progressUpdate: 'Completed wireframes, working on mockups'
        },
        {
          id: 2,
          taskTitle: 'API Integration',
          status: 'pending',
          hoursSpent: 0,
          progressUpdate: 'Waiting for API documentation'
        }
      ]);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Function to handle adding a new task
  const addTask = async () => {
    if (!newTask.taskTitle || !newTask.status || !newTask.progressUpdate) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/user/tasks`, newTask, {
        withCredentials: true
      });
      console.log('Task added:', response.data);
      
      // Add to local state
      setTasks(prevTasks => [...prevTasks, { ...newTask, id: Date.now() }]);
      
      // Reset form
      setNewTask({
        taskTitle: '',
        status: 'pending',
        hoursSpent: 0,
        progressUpdate: ''
      });
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Your Tasks</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <PenSquare className="w-4 h-4" />
            Add Task
          </button>
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Title *
              </label>
              <input
                type="text"
                value={newTask.taskTitle}
                onChange={(e) => setNewTask({...newTask, taskTitle: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status *
              </label>
              <select
                value={newTask.status}
                onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hours Spent
              </label>
              <input
                type="number"
                value={newTask.hoursSpent}
                onChange={(e) => setNewTask({...newTask, hoursSpent: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Progress Update *
              </label>
              <textarea
                value={newTask.progressUpdate}
                onChange={(e) => setNewTask({...newTask, progressUpdate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Describe your progress..."
              />
            </div>
            <button
              onClick={addTask}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Task Update
            </button>
          </div>
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
