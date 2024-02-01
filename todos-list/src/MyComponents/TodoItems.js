import React from 'react'

const TodoItems = ({todo}) => { // Destructuring method
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
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