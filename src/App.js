import "./styles.css";
import React, { useState } from "react";
import Todoitem from "./Todoitem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="App">
      <div>
        <h1>To Do List</h1>
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Add an item"
      />
      <button onClick={addItem}>
        <span>add</span>
      </button>

      <section>
        <ul>
          {items.map((item) => (
            <Todoitem text={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
