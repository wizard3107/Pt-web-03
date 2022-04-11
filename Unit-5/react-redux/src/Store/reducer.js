import { ADD_TODOS, CART_COUNT, DELETE_TODOS } from "./actionTypes"

export const reducer = (state, { type, payload }) => {

    switch (type) {
        case CART_COUNT: return { ...state, count: state.todos.length }
        case ADD_TODOS: return { ...state, todos: [...state.todos, payload] }
        case DELETE_TODOS:{ 
        console.log(payload) ;
        return { 
            ...state,
             todos: state.todos.filter((todo) => todo.id !== payload) 
            }}
        default: return state
    }
}   
