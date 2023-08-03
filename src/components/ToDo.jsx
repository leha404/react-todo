import React, { useState } from "react"

// Hooks can call only inside render function
function ToDo(props) {
  // State: init value AND func for this value
  const [isDone, setDone] = useState(false);

  // Hook
  function setIsDone() {
    setDone(true);
  }

  const doneStyle = {
    textDecoration: "line-through"
  }

  return (
    <li>
      <p style={isDone ? doneStyle : null}>
        Тестовый элемент
        <button onClick={setIsDone} hidden={isDone}>Выполнить</button>
        <button hidden={!isDone}>Удалить</button>
      </p>
    </li>
  );
}

export default ToDo;
