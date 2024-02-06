import React, { useState } from 'react';

const AddTodo = ({addTodo})=>{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty");
        }else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return(
        <div className='container mt-4'>
            <h3 className="mb-3">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todoTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="todoDesc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo