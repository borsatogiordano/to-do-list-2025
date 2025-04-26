export function Form() {
  return (
    <form className="flex gap-2 h-16 max-w-3xl w-full">
      <textarea
        className="flex-1 bg-[#262626] text-zinc-100 placeholder:text-zinc-400 p-4 rounded-lg resize-none border-none outline-none h-full"
        name="task"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center gap-2 h-full">
        Criar <span className="text-xl">＋</span>
      </button>
    </form>
  );
}
