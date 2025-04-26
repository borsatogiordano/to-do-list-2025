import { TaskListProps } from "../types";
import { TaskItem } from "./TaskItem";
import { TaskListHeader } from "./TaskListHeader";

export function TaskList({
  tasks,
  onDeleteTask,
  onToggleComplete,
}: TaskListProps) {
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className="w-full max-w-3xl mt-14 text-white">
      <TaskListHeader
        tasksCreated={tasksCreated}
        tasksCompleted={tasksCompleted}
      />
      <div className="mt-6">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            content={task.content}
            onDelete={() => onDeleteTask(task.id)}
            isCompleted={task.isCompleted}
            onToggleComplete={() => onToggleComplete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
