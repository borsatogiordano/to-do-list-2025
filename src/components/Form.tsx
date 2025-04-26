import { FormEvent, useState } from "react";
import { FormProps } from "../types";

export function Form({ onCreateTask }: FormProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (content.trim() === "") {
      return alert("O campo não pode estar vazio");
    }

    onCreateTask(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 h-16 max-w-3xl w-full">
      <textarea
        className="flex-1 bg-[#262626] text-zinc-100 placeholder:text-zinc-400 p-4 rounded-lg resize-none border-none outline-none h-full"
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button
        className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center gap-2 h-full"
        type="submit"
      >
        Criar <span className="text-xl">＋</span>
      </button>
    </form>
  );
}
