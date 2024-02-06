import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    // console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todoList.indexOf(todo);
    // todoList.splice(index, 1);
    
    setTodoList(todoList.filter((e)=>{
      // console.log(e, todo);
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todoList));
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
  const [todoList, setTodoList] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList])
  
  return (
    <>
       <BrowserRouter>
       <Header title="My Todos List" searchBar={false} />
        <Routes>
            <Route exact path="/" element={<><AddTodo addTodo={addTodo} /> <Todos todos={todoList} onDelete={onDelete} /></>}  />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
