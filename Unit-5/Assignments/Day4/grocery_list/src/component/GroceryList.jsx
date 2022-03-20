import React from 'react'
import styles from './griceryList.module.css'

const GroceryList = ({ item, handle_delete}) => {
    
    return (
        <div>
            <div className={styles.list}>

                 <span >{item.value}</span>
                
                <button onClick={() => handle_delete(item)} className={styles.del_btn} >Delete</button>
                
            </div>
        </div>
    )
}

export default GroceryList

