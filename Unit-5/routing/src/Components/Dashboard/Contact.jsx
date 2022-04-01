import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const params= useParams();
  return (
      <div className='box'>
      Contact : {params.id}
    </div>
  )
}

export default Contact
