import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddTodo = (props) => {
    const[title,setTitle]   =   useState("");
    const[desc,setDesc]     =   useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addToDo(title,desc);
            setTitle("");
            setDesc("");
        }
      }
    return (
        <div className='text-center container p-2'>
            <h3>Add a To Do</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className='form-control' id="desc" />
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
