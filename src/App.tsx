import { useState } from "react";
import { Task } from "./types/tasks";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Form from "./components/Form";

interface App {
  tasks: Array<Task>;
}

function App() {
  const [tasks, setTasks] = useState<App["tasks"]>([]);

  const addTask = (task: string): void => {
    const newTask: Task = {
      id: Date.now(),
      name: task,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <main>
        {tasks.length === 0 ? (
          <p className="empty-list">Empty List 😪</p>
        ) : (
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        )}
      </main>
    </>
  );
}

export default App;
