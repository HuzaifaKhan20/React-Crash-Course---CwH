import React from 'react'

const TodoItems = ({todo, onDelete}) => { // Destructuring method
  return (
    <>
    <div className='mt-5'>
      <h4>{todo.sno}) {todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
}


// const TodoItems = (props) => { // Parameter method
//   return (
//     <div>
//       <h4>{props.todo.title}</h4>
//       <p>{props.todo.desc}</p>
//     </div>
//   )
// }

export default TodoItems