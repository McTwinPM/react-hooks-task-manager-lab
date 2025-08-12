import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();


export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:6001/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  function toggleComplete(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleComplete, completed, setCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}
