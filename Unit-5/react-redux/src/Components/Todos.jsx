import { useSelector} from 'react-redux'
import Todo from './Todo';
import TodoInput from './TodoInput';

const Todos = () => {
  const todos = useSelector(state=>state.todos)
  return (
    <div>
      <h1>TODOS</h1>
      <TodoInput/>
      <h1>
        Todo List
      </h1>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            <Todo todo={todo}/>
          </div>
        )
        )
      }
    </div>
  )
}

export default Todos
