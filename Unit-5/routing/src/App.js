import './App.css';
import Navbar from './Components/Dashboard/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {isLoggedIn}=useContext(AuthContext)
  return (
    <div className="App box">
      <Navbar/>
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
