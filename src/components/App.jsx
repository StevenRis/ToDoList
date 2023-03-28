import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';
import getDate from './Date';

function App() {
  const [items, setItems] = useState([
    { item: 'Check my CV', id: 'g1' },
    { item: 'Check my portfolio', id: 'g2' },
    { item: 'Check my code', id: 'g3' },
    { item: 'Hire me!', id: 'g4' },
    { item: 'You will not regret!', id: 'g5' },
  ]);

  function addItem(inputText) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.push({ item: inputText, id: Math.random().toString() });
      return updatedItems;
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <h3>{getDate()}</h3>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
