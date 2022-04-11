import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../Store/actionTypes';
const Counter = () => {
    const count = useSelector((state => state.count))
  return (
    <div>
          <h1>{count}</h1>
    </div>
  )
}

export default Counter
