
import './App.css';
import React from 'react'
function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
      <div className='count'>
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count * 2)}>Double</button>
      </div>
    </div>
  );
}

export default App;
