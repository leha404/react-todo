import React, { useState } from "react";

// Hooks can call only inside render function
function ToDoList() { 
  // State: init value AND func for this value
  const [isDone, setDone] = useState(false);

  // Hook
  function change() {
    setDone(!isDone);
  }

  const doneStyle = {
    textDecoration: "line-through"
  }
  
  return <div>
    <ul>
      <li>
        <p style={isDone ? doneStyle : null}>
          Тестовый элемент
          <button onClick={change}>Выполнить / Отменить</button>
        </p>
      </li>
    </ul>
  </div>
}

export default ToDoList;
