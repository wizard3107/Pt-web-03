import React from 'react'
import CompletedGrocery from './CompletedGrocery';
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'

const Grocery = () => {
  const [list, setList] = React.useState([]);
  const [completedList, setCompletedList] = React.useState([]);
  const handle_delete = (del_item) => {
    const new_list = list.filter((ele) => {
      if (ele.id !== del_item.id) {
        return ele;
      }
    })
    setList(new_list);
  }
  const complete_delete=(del_item)=>{
    const new_com_list = completedList.filter((ele) => {
      if (ele.id !== del_item.id) {
        return ele;
      }
    })
    setCompletedList(new_com_list);
  }
  
 const handle_complete=()=>{
   const complete = list.filter((ele) => {
     return ele.status=true
   })
   setCompletedList(complete)
   
 }
  const handleEdit = (edit, val) => {
    const update_grocery = list.map((ele) => {
      if (ele.id === edit.id) {
        ele.value = val;
        return ele
      }
      else
        return ele;
    })
    setList(update_grocery)

  }

  return (
      <div className='list'>
        <h3>
          Add item to Grocery
        </h3>
        <GroceryInput list={list} setList={setList} />
        <h1>Grocery List</h1>
        {list.map((item) => {
          return (
            <GroceryList item={item} list={list} completedList={completedList} setList={setList} handleEdit={handleEdit} handle_delete={handle_delete} handle_complete={handle_complete}  />

          )
        }
        )
        }
      {
        completedList.length > 0 ? <div className='bought'>
          {
            completedList.map((item) => {
              console.log(item.status)
              return (
                <CompletedGrocery item={item} complete_delete={complete_delete}/>
              )

            })
          }
        </div> : ""
      }
      </div>
  )
}

export default Grocery
