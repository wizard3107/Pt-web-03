import './App.css';
import Navbar from './Components/Dashboard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Dashboard/Home';
import Contacts from './Components/Dashboard/Contacts';
import About from './Components/Dashboard/About';
import Contact from './Components/Dashboard/Contact';
import NewContact from './Components/Dashboard/NewContact';

function Dashboard() {
    return (
        <div className="Dashboard box">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contacts' element={<Contacts />}>
                    <Route path=':id' element={<Contact />} />
                    <Route path='new' element={<NewContact />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Dashboard;
