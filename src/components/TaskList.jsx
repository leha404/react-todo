import Task from "./Task";
import tasksData from "../tasksData";

function TaskList() {
  return <ol>
    {tasksData.map(task => 
      <li key={task.text}>
        <Task checked={task.checked} text={task.text}/>
      </li>
    )}
  </ol>;
}

export default TaskList
