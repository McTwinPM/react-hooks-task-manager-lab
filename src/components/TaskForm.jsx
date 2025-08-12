import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const taskId = useId();

  

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    const newTask = {
      title: taskName,
      completed: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={taskId}>New Task:</label>
      <input
        id={taskId}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" onClick={handleSubmit}>Add Task</button>
    </form>
  );
}

export default TaskForm;
