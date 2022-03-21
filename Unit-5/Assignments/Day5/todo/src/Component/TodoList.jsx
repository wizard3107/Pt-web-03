import React from 'react'

const TodoList = (item) => {
    console.log("todoList", item.item.value);
    return (
        <div>
            <h1>{item.item.value}</h1>
        </div>
    )
}

export default TodoList
