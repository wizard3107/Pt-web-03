import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import User from './components/User';
import Users from './components/Users';

function App() {
  
  return (
    <div className="App">
      Navbar
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element ={<About/>}/>
        <Route path='users' element= {<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
