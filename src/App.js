import TaskContextProvider from "./contexts/TaskContext";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <div className="task-list">
          <h1>Task List</h1>
          <TaskList />
          <AddTask />
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
