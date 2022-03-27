import React from 'react'
import styled from 'styled-components'
export const Btn = styled.button`
  border:${props => props.type === 'primary' ? "1px solid blue" : props.type === 'default' ? "1px solid black" : props.type === 'dashed' ? "1px dashed black" : "none"};

  color:${props => props.type === 'primary' ? "white" : props.type === 'link' ? "aqua": "none"}; 
  
  background-color:${props => props.type === 'primary' ? "aqua" : "white"};
  `
const Button = ({type}) => {
  return (
    <div>
      <Btn type={type}>{type} Button</Btn>
    </div>
  )
}

export default Button
