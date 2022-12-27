import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
const TaskList = () => {
  const [tasks, setTasks] = useContext(TaskContext);
  return tasks.length ? (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>No Tasks Found</div>
  );
};

export default TaskList;
