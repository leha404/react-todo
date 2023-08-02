import Heading from './components/Heading';
import TaskList from './components/TaskList';

// App Component
const App = () => {
  return (
    <div>
      <Heading />
      <h2>План по ReadMe:</h2>
      <TaskList />
    </div>
  );
};

export default App;