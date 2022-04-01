import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {onLogin}=useContext(AuthContext)
  return (
    <div>
          Login 🥳🥳
      <button onClick={onLogin}>Sign in</button>
    </div>
  )
}

export default Login
