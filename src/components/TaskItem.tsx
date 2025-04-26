import { Trash2 } from "lucide-react";
import { TaskItemProps } from "../types";
import { Check } from "lucide-react";

export function TaskItem({
  content,
  isCompleted,
  onDelete,
  onToggleComplete,
}: TaskItemProps) {
  return (
    <main className="flex items-center gap-3 p-4 bg-stone-800 rounded-lg justify-between mt-4">
      <div className="flex gap-4">
        <label className="relative cursor-pointer w-5 h-5 flex items-center justify-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={onToggleComplete}
            className="peer absolute w-5 h-5 opacity-0 cursor-pointer"
          />
          <span
            className={`
      w-5 h-5 rounded-full flex items-center justify-center
      transition-colors
      ${
        isCompleted
          ? "bg-[#6366f1]"
          : "bg-transparent border-2 border-[#4EA8DE]"
      }
    `}
          >
            {isCompleted && <Check size={14} color="white" />}
          </span>
        </label>
        <span className={isCompleted ? "line-through text-zinc-500" : ""}>
          {content}
        </span>
      </div>
      <button onClick={onDelete}>
        <Trash2 size={18} color="#808080"></Trash2>
      </button>
    </main>
  );
}
