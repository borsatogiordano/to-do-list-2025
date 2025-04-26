import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { v4 as uuid } from "uuid";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateNewTask = (content: string) => {
    const newTask: Task = {
      id: uuid(),
      content: content,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };
  return (
    <main className="h-screen w-screen bg-stone-900 flex flex-col items-center">
      <Header />
      <Form onCreateTask={handleCreateNewTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </main>
  );
}

export default App;
