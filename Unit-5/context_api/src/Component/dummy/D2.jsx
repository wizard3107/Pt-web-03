import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/todoContext'
import styled from 'styled-components'
const Cont=styled.div`
color:${props=>props.mode?'black':"white"};
background-color:${props => props.mode ? 'white' : "black"};

`
const D2 = () => {
    const {value,mode}=useContext(TodoContext)
  return (
    <Cont mode={mode}>
      D2 : {value}
    </Cont>
  )
}

export default D2
