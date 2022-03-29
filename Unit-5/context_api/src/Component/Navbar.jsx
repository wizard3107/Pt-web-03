import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { IconButton } from '@mui/material'
const Navbar = () => {
  const { todo, mode,setMode } = useContext(TodoContext)

  return (
    <div>
      Navbar: {todo.length}
      <IconButton aria-label="Mode">
        {
          !mode ? <LightModeIcon onClick={()=>setMode(!mode)} /> : <NightlightRoundIcon onClick={()=>setMode(!mode)} />
        }
      </IconButton>
    </div>
  )
}

export default Navbar
