import Heading from './components/Heading';
import ToDoList from './components/ToDoList';

// App Component
const App = () => {
  return (
    <div>
      <Heading />
      <p>План по ReadMe:</p>
      <ToDoList />
    </div>
  );
};

export default App;