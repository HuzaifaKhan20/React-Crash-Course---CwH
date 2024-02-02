import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo)=>{
    // console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todoList.indexOf(todo);
    // todoList.splice(index, 1);
    
    setTodoList(todoList.filter((e)=>{
      // console.log(e, todo);
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno = todoList.length>0?todoList[todoList.length-1].sno + 1:0;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodoList([...todoList,myTodo]);
    console.log(myTodo);
  }
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todoList} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
