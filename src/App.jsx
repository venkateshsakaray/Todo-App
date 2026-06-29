import { useState,useEffect } from "react";
import TodoItem from "./TodoItem";
import './App.css';

function Todolist(){
const [value,setvalue] = useState('')
const [todo,settodo] = useState([])

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(res=>res.json())
.then(data=>settodo(data))
},[])

function addTodo(){
  const newTodo = {
    id: Date.now(),
    title:value,
    completed:false
  }
  settodo([newTodo, ...todo])
  setvalue('')
}

function deletetodo(id){
 settodo(todo.filter(item=>item.id !== id))
  }

function toogleTodo(id){
  settodo(todo.map(item => 
  item.id === id ? {...item, completed: !item.completed} : item
))
}

return(
  <div className="container">
    <h1>Todo App</h1>
    <p className="todo-count">
  {todo.filter(item => !item.completed).length} todos remaining
</p>
    <div className="input-box">
      <input 
        type="text" 
        value={value} 
        onChange={e => setvalue(e.target.value)} 
        placeholder="Add a todo..." 
      />
      <button onClick={addTodo}>add</button>
    </div>
    {todo.map(item => (
      <TodoItem
  key={item.id}
  title={item.title}
  completed={item.completed}
  onDelete={() => deletetodo(item.id)}
  onToggle={() => toogleTodo(item.id)}
/>
    ))}
    {todo.length === 0 && <p className="empty">No todos yet. Add one!</p>}
  
  </div>
 
)
}
export default Todolist