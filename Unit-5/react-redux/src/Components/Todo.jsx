import React from 'react'
import { useDispatch} from 'react-redux'
import { delete_todos } from '../Store/actions'
import { CART_COUNT } from '../Store/actionTypes'

const Todo = ({todo}) => {
    const dispatch=useDispatch()
    console.log(todo)
  return (
    <div>
        <h3>
        {todo.value}
        </h3>
        <button onClick={()=>{
            dispatch(delete_todos(todo.id))
              dispatch({
                  type: CART_COUNT
              })
        }}>
            Delete
        </button>
    </div>
  )
}

export default Todo
