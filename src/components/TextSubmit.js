import { useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from "react";
const TextSubmit = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useContext(TaskContext);
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div>
      <input
        type={"text"}
        value={taskName}
        onInput={handleChange}
        name={"task"}
      ></input>
      <button
        onClick={() => {
          setTasks([...tasks, { title: taskName, id: tasks.length + 1 }]);
          setTaskName("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TextSubmit;
