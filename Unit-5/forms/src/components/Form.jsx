import React from 'react'
import Emplist from './Emp_List'
import FormInput from './FormInput'
const iniData = {
    "Name": "",
    "Department": "",
    "Salary": "",
    "Address": "",
    "Married": false,
    "Age": "",
}
const Form = () => {
    const [formData, setFormData] = React.useState(iniData);
    const [emp, setEmp] = React.useState([])
    const handleChange = (e) => {
        let { value, name, type, checked } = e.currentTarget;
        value = type === "checkbox" ? checked : type === "number" ? +value : value
        setFormData({
            ...formData,
            [name]: value
        })
        
    }
    const handleSubmit = () => {
        AddEmployee(formData);
        setFormData(iniData)
    }
    const AddEmployee = (data) => {
        fetch("  http://localhost:3000/employee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => setEmp([...emp, res]))
            .catch(err => console.log(err))
        getEmployee();
    }
    const getEmployee = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            .then(res =>setEmp(res))
            .catch(err => console.log(err))

    }
   
    React.useEffect(() => {
        getEmployee()
    }, [])
    return (
        <div>
            <FormInput formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            
            <table className='table'>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Married</th>
                <tbody>

            {
                emp.map((data) =>  <Emplist key={data.id} data={data} />)
            }
            </tbody>
            </table>
        </div>
    )
}

export default Form
