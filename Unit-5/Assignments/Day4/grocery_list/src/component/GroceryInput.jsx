import React from 'react'
import {v4} from 'uuid'
const GroceryInput = ({list,setList}) => {
    const [value, setValue] = React.useState("");
    const handle_Submit = () => {
        if(value==="")
        {
            alert("value cannot be Empty!!")
        }
        else
        {
        const data={
            value,
            id:v4(),
            stat:false
        }

        console.log(data);
        setList([...list,data])
        setValue("");
    }
}
    return (
        <div>
            <input type="text" value={value} placeholder="Add item to Grocery List" onChange={(e) => setValue(e.currentTarget.value)} />
            <button onClick={handle_Submit}>Add</button>
        </div>
        )
}

export default GroceryInput
