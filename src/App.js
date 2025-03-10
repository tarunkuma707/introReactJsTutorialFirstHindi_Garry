
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import Todo from "./MyComponents/TodoItem";
import React, { useState } from 'react';
import AddTodo from "./MyComponents/AddTodo";


function App() {
  let initToDo;
  if(localStorage.getItem('todos')===null){
    initToDo = [];
  }
  else{
    initToDo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) =>{
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addToDo = (title,desc) => {
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length>=1){
      sno  =  todos[todos.length-1].sno + 1;
    }
    else{
      sno = 1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    if(localStorage.getItem('todos')){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }

  const [todos, setTodos] = useState([initToDo]);
  return (
    <>
      <Header title="My Todos List" serachBar={ true } />
      <Todos todos={todos} onDelete={onDelete} />
      <AddTodo addToDo={addToDo} />
      <Footer />
    </>
  );
}

export default App;
