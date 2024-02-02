import React from 'react'

const Footer = () => {
  let footerStyle = {
    marginTop: "100px",
    // position: "absolute",
    // top: "100vh",
    // width: "100%",
    
  }
  return (
    <footer className='bg-dark text-light py-4' style={footerStyle}>
      <p className='text-center m-0'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}

export default Footer