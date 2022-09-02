import React, { useState } from "react";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Membuat state
  const [name, setName] = useState([
    {
      text: "Your Todo Here",
      isDone: false,
      showComponents: false
    },
  ]);

  // Membuat Form Baru
  const addForm = (text) => {
    const newAdd = [...name, { text }];
    setName(newAdd);
  };

  // Menandai Form Selesai
  const markDone = (text) => {
    const newAdd = [...name];
    newAdd[text].isDone = true;
    setName(newAdd);
  };

  // Menghapus From
  const removeForm = (index) => {
    const newAdd = [...name];
    newAdd.splice(index, 1);
    setName(newAdd);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="mt-3">
          <h3 className="text-center font-w-6">Create Todo App</h3>
          <FormTodo addForm={addForm} />
          <div>
              {name.map((names, index) => (
                <Card className="mt-3">
                  <Card.Body>
                    <Todo
                      key={index}
                      index={index}
                      names={names}
                      markDone={markDone}
                      removeForm={removeForm}
                    />
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
