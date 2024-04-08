import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import Footer from "./Footer";
function ListForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const newItem = {
      name,
      quantity,
      id: Date.now(),
      isChecked: false,
    };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="taskInput"
          placeholder="Add a new task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default ListForm;
