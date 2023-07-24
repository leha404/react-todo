import Heading from './components/Heading';
import ToDoList from './components/ToDoList';

// App Component
const App = () => {
  return (
    <div>
      <Heading />
      <h2>План по ReadMe:</h2>
      <ToDoList />
    </div>
  );
};

export default App;