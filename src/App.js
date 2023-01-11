import "./App.css";
import Home from "./components/Home";
import NewTask from "./components/newTask";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h1 className="text-blue-900 text-bold text-2xl">Task Manager</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Task
      </button>
      <section className="tasks">
        <Home />
      </section>
      <NewTask showModal={showModal} />
    </div>
  );
}

export default App;
