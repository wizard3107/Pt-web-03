import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './Store/actionTypes';

function App() {
  const dispatch = useDispatch();
  const count =useSelector((state=>state.count))
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch({type:COUNTER_INCREMENT})
      }}>Increment</button>
      <button onClick={() => {
        dispatch({ type: COUNTER_DECREMENT })
      }}>Decrement</button>
    </div>
  );
}

export default App;
