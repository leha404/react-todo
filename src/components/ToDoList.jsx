import Task from "./Task";
import tasks from "../tasks";

function ToDoList() {
  return <ol>
    {tasks.map(task => 
      <li>
        <Task key={task.text} checked={task.checked} text={task.text}/>
      </li>
    )}
  </ol>;
}

export default ToDoList
