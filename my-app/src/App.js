import React, { useState } from "react";
import "./App.css";
import { Button,FormControl,InputLabel ,Input } from '@material-ui/core';
import ToDo from "./ToDo";

function App() {
  const [todos, setTodos] = useState([
    "Work with React + Firebase",
    "Work with Angular + Node & Mongo",
  ]);

  const [input, setInput] = useState("");

  const addToDo = (event) => {
    // prevent refreshing the page
    event.preventDefault();
    setTodos([...todos, input]);
    // clear the input field empty
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello Sithija 🚀</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          type="submit"
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addToDo}
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <ToDo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
