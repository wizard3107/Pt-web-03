import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const [user,setUser] =useState({}) 
    const params = useParams();
    console.log(params)
    React.useEffect(()=>{
        fetch(`http://localhost:3000/user/${params.id}`)
        .then(r=>r.json())
        .then(d=>setUser(d))
        .catch(err=>console.log(err))
    },[params])
  return (
    <div>
      {user.id}:user Name: {user.name} 
    </div>
  )
}

export default User
