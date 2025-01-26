import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      taskTitle: "UI Design Review",
      status: "In Progress",
      hoursSpent: "5",
      progressUpdate: "Partially changes available",
      dueDate: "Tomorrow"
    }
  ]);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const value = {
    tasks,
    addTask
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};