import React from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'

const Grocery = () => {
  const [list, setList] = React.useState([]);
  
  const handle_delete = (del_item) => {
    const new_list = list.filter((ele) => {
      if (ele.id !== del_item.id) {
        return ele;
      }
    })
    setList(new_list);
  }
 

  return (
    <div>
      <h3>
      Add item to Grocery
      </h3>
      <GroceryInput list={list} setList={setList} />
      <h1>Grocery List</h1>
      {list.map((item) => {
  return(
    <GroceryList item={item} list={list} setList={setList} handle_delete={handle_delete}/>

  ) 

      }
      )
     } 
    </div>
  )
}

export default Grocery
