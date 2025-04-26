import { TaskListHeaderProps } from "../types";

export function TaskListHeader({
  tasksCreated,
  tasksCompleted,
}: TaskListHeaderProps) {
  return (
    <header className="flex justify-between pb-4 border-b-1 border-stone-700">
      <div className="flex gap-4 items-center">
        <p className="text-[#4EA8DE] font-bold">Tarefas criadas</p>{" "}
        <span className="px-4 py-1 bg-stone-800 rounded-full">
          {tasksCreated}
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-[#8284FA] font-bold">Concluídas</p>{" "}
        <span className="px-4 py-1 bg-stone-800 rounded-full">
          {tasksCompleted}
        </span>
      </div>
    </header>
  );
}
