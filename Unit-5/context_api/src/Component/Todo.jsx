import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const {todo,setTodo} = useContext(TodoContext)
    const [page,setPage]= React.useState(1);
    const getTodos=()=>{
        fetch(`http://localhost:3000/todo?_page=${page}&_limit=3`)
            .then(res => res.json())
            .then(res => {
                console.log("todo", res)
                setTodo(res)
            })
            .catch(err => console.log(err))
    }
    React.useEffect(() => {
        getTodos();
    }, [page]);
    const AddTodos=(title)=>{
        const payload={
            value:title,
            stat:false
        } 
        fetch("http://localhost:3000/todo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(res => {
                console.log("todo", res)
                setTodo([...todo,res])
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <TodoInput AddTodos={AddTodos} />
            {
               todo.map((item)=>{
                console.log("todoIterator",item)
               return <TodoList key={item.id} item={item}/>
            })
            }
            <div>
            <button disabled={page===1?true:false} onClick={()=>setPage(page-1)}>prev</button>
            <button  onClick={()=>{setPage(page+1)}}>next</button>
            </div>
        </div>
    )
}

export default Todo
