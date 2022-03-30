import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users,setUsers]=React.useState([]);
    const navigate =useNavigate();
    useEffect(()=>{
        fetch('http://localhost:3000/user')
        .then(r=>r.json())
        .then(d=>setUsers(d))
        .catch(err=>console.log(err))
    },[])
    const gotoUser=(user)=>{    
        navigate(`/users/${user.id}`)
    }
  return (
    <div>
        {
            users.map((user)=>(
                <div>
                    {user.id}.
            <button onClick={()=>gotoUser(user)}>
                {user.name}
            </button>
            </div>
                ))
                
        }
        
    </div>
  )
}

export default Users
