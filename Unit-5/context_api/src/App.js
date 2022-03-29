import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import Navbar from './Component/Navbar';
import D1 from './Component/dummy/D1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <D1/>
      <Todo/>
    </div>
  );
}

export default App;
