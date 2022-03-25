import React from 'react'

const Emplist = ({ data }) => {
  console.log("empList Called")
  return (
    
      <tr>
        <td>{data.Name}</td>
        <td>{data.Age}</td>
        <td>{data.Department}</td>
        <td>{data.Address}</td>
        <td>{data.Salary}</td>
        <td>{data.Married?"Yes":"No"}</td>
      </tr>
    
  )
}

export default Emplist
