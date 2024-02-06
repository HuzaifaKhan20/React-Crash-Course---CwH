import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
  return (
    <div className='container my-5'>
        <h3 >Todos List</h3>
        {/* {props.todos} */}
        {/* <p>{props.todos[0].title}</p> */} 
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todoList)=>{
          // console.log(todoList);
            return(<TodoItems todo={todoList} key={todoList.sno} onDelete={props.onDelete} />)
        })
        }
    </div>
  )
}

export default Todos