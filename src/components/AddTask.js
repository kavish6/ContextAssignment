import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import CustomTask from "./CustomTask";
// var z = 2;
const AddTask = () => {
  const [task, setTasks] = useContext(TaskContext);
  const logicInc = () => {
    setTasks([
      ...task,
      {
        title: `Task ${
          task.length + 1 < 10 ? `0${task.length + 1}` : task.length + 1
        }`,
        id: task.length + 1,
      },
    ]);
  };
  const logicDec = () => {
    setTasks(task.filter((t) => t.id != task.length));
  };
  return (
    <div>
      <button onClick={logicInc}>Add New Task</button>
      <button onClick={logicDec}>Remove Task</button>
      <CustomTask />
    </div>
  );
};

export default AddTask;
