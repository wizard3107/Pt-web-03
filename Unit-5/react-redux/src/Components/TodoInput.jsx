import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { add_todos } from '../Store/actions';
import { CART_COUNT } from '../Store/actionTypes';
const TodoInput = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("")
  return (
    <div>
          <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
          <button onClick={() => {
              dispatch(add_todos(value))
              dispatch({
                  type:CART_COUNT
              })
              setValue("")
          }}
          >Add</button>
    </div>
  )
}

export default TodoInput
