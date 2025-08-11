import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const [tasks, setTasks] = useState([]);

export function TaskProvider({ children }) {
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
