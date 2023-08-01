import Task from "./Task";
import tasks from "../tasks";

function createTask(task) {
  return <li>
    <Task key={task.name} checked={task.checked} text={task.text}/>
  </li>;
}

function ToDoList() {
  return <ol>
    {tasks.map(createTask)}
  </ol>;
}

export default ToDoList
