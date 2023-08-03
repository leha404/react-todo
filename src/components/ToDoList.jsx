import React, {useState} from "react";
import ToDo from "./ToDo";

function ToDoList() {   
  const [list, setList] = useState([])

  function setState(newToDo) {
    setList(...list, newToDo)
    console.log(list)
  }

  let val = '123123'
  
  return <div>
    <input placeholder="Введите текст" value={val}></input>
    <button onClick={() => {setState(val)}}>Добавить</button>
    <ul>
      <ToDo />
    </ul>
  </div>
}

export default ToDoList;
