
import { v4 } from 'uuid'
import { ADD_TODOS, DELETE_TODOS } from './actionTypes'
export const add_todos = (value) =>( {
        type: ADD_TODOS,
        payload: {
        value,
        id: v4()
    }
})
export const delete_todos = (id) => (
    {
    type: DELETE_TODOS,
    payload: id
})