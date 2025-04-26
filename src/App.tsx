import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main className="h-screen w-screen bg-stone-900 flex flex-col items-center">
      
        <Header />
        <Form />

        <TaskList />
      
    </main>
  );
}

export default App;
