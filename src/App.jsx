import Heading from './components/Heading';
import List from './components/List';

// Inline styling
const customStyle = {
  color: "red",
};

// Update Custom Style JSON
customStyle.color = "blue";

// App Component
const App = () => {
  return (
    <div>
      <Heading />

      <p style={customStyle}>План по ReadMe:</p>
      <List />
    </div>
  );
};

export default App;