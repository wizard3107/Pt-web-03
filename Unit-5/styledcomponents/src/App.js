import './App.css';
import React from 'react';
import styled from 'styled-components'
function App() {
  const Hello = styled.h1`
  color:${props=>props.count>5?"red":"green"}; 
  font-size:24px
  `
  const [count,setCount]=React.useState(0);
  return (
    <div className="App">
      <Hello count={count}>hey</Hello>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
}

export default App;
