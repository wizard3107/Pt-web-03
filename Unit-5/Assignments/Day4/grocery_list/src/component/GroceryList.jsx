import React from 'react'
import styles from './griceryList.module.css'
const GroceryList = ({ item, handle_delete, handleEdit, handle_complete }) => {
    const [EditMode, setIsEditMode] = React.useState(false);
    const [isComplete,setIsComplete]=React.useState(false);
    const [updatedValue, setUpval] = React.useState(item.value)
    return (
        <div>
            <div className={styles.list}>
                <input type="checkbox" checked={isComplete}  onChange={()=>{setIsComplete(!isComplete)
                handle_complete()}} />
                {EditMode ? <><input type="text"
                    value={updatedValue}
                    placeholder="Update item to Grocery List"
                    onChange={(e) => setUpval(e.currentTarget.value)} />
                    <button onClick={() => {
                        updatedValue===""?alert("vlaue cannot be empty!!"):
                        handleEdit(item, updatedValue);
                        setIsEditMode(false)
                    }
                    }
                    >Update</button></> : <span >{item.value}</span>}
                <button onClick={() => {
                    setIsEditMode(!EditMode)
                    setIsComplete(false)
                }
                }>{EditMode ? "Cancel Edit" : "Edit"}</button>
                <button onClick={() => handle_delete(item)} className={styles.del_btn} >Delete</button>
            </div>
            
        </div>
    )
}

export default GroceryList

