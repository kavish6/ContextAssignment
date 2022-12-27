import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Task 01", id: 1 },
    { title: "Task 02", id: 2 },
  ]);
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
