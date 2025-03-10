import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minheight: "10vh",
  }
  return (
    <div className='container' style={myStyle}>      
      <h3 className='text-center m-3'>Todos Here</h3>
      {/* {props.todos} */}
      {props.todos.length>0 ? props.todos.map((todo)=> {
        return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      }) : "No Todods here" }
    </div>
  )
}

export default Todos
