function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={props.completed} 
        onChange={props.onToggle} 
      />
      <span className={props.completed ? "completed" : ""}>
  {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
</span>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default TodoItem