import React from 'react'

const FormInput = ({formData,handleChange,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} >
      <div className="form">

          <label>Name</label>
          <input type="text" name="Name" value={formData.Name} placeholder="Name" onChange={e => handleChange(e)} />
          <label>Age</label>
          <input type="number" value={formData.Age} placeholder="Age" name="Age" onChange={e => handleChange(e)} />
          <label>Address</label>
          <input type="text" name="Address" value={formData.Address} placeholder="Address" onChange={e=>handleChange(e)}/>
          <label>Department</label>
          <select name="Department" onChange={(e)=>handleChange(e)}>
              <option value="">Department</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketting">Marketting</option>
          </select>
          <label> Salary</label>
          <input type="number" name="Salary" value={formData.Salary} placeholder="Salary" onChange={(e) => handleChange(e)}/>
      </div>
          <label>marital state</label>
          <input type="checkbox" name='Married' onChange={(e)=>handleChange(e)}/>
          <input type="submit" className="submit"/>
    </form>
  )
}

export default FormInput
