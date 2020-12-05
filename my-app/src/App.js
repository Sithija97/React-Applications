import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Work with React + Firebase",
    "Work with Angular + Node & Mongo",
  ]);

  const [input, setInput] = useState("");

  const addToDo = (event) => {
    setTodos([...todos, input]);
  };
  return (
    <div className="App">
      <h1>Hello Sithija</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addToDo}> Add ToDo </button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
