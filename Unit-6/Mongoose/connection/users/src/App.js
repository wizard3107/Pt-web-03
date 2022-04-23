import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users=")
      .then(r => r.json())
      .then(d => {
        console.log(d)
        setUsers(d)
      })
  }, [])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return(

                <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.LastName}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.Age}</td>
              </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
