import React from 'react'

const TodoInput = ({AddTodos}) => {
    const [value, setValue] = React.useState("");
    const handle_Submit = () => {
        if (value === "") {
            alert("value cannot be Empty!!")
        }
        else {
            AddTodos(value);
            setValue("");
        }
    }
    return (
        <div>
            <input type="text" value={value} placeholder="Add item to Todo List" onChange={(e) => setValue(e.currentTarget.value)} />
            <button onClick={handle_Submit}>Add</button>
        </div>
    )
}

export default TodoInput
