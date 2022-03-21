import React from 'react'

const CompletedGrocery = ({ item, complete_delete, isComplete, setIsComplete}) => {
  return (
    <div>
          <div >
              <input type="checkbox" checked={isComplete} onChange={() => setIsComplete(!isComplete)} />
              <span >{item.value}</span>
              <button onClick={() => complete_delete(item)} >Delete</button>              
          </div>

    </div>
  )
}

export default CompletedGrocery
