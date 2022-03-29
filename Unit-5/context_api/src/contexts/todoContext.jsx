import React,{createContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{
    const [value, setValue] = React.useState("hello");
    const [todo, setTodo] = React.useState([]);
    const [mode,setMode]=React.useState(true)
    return <TodoContext.Provider value={{value,setValue,todo,setTodo,mode,setMode}} >{children}</TodoContext.Provider>
}