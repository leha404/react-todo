import Heading from './components/Heading';
import TaskList from './components/TaskList';
import ToDoList from './components/ToDoList';

// App Component
const App = () => {
  return (
    <div>
      <Heading />
      <h2>План по ReadMe:</h2>
      <TaskList />
      <br />
      <h3>Тудушка:</h3>
      <ToDoList />
    </div>
  );
};

export default App;