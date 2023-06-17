import {  useState } from "react";

function MyTodo() {
    let [successBox, setsuccessBox] = useState(false);
    let [todo, setTodo] = useState({ task: "", description: "" });
  
    let handleChnageTaskAction = (e) => {
      let newTodo = { ...todo, task: e.target.value };
      setTodo(newTodo);
    };
  
    let handleChangeDescriptionAction = (e) => {
      
      let newTodo = { ...todo, description: e.target.value };
      setTodo(newTodo);
    };
  
    let addTodoAction = () => {
      
      
      let url = `http://localhost:4000/addTodo?task=${todo.task}&description=${todo.description}`;
      fetch(url);
      
      let newtodo = { task: "", description: ""};
      setTodo(newtodo);
  
      setsuccessBox(true);
      setTimeout(() => setsuccessBox(false),5000)
    };
  
    return (
      <>
        <input
          className="form-control"
          type="text"
          placeholder="Enter task"
          value={todo.task}
          onChange={handleChnageTaskAction}
        />
  
        <textarea
          className="form-control"
          cols="30"
          rows="3"
          placeholder="Enter Description"
          value={todo.description}
          onChange={handleChangeDescriptionAction}
        ></textarea>
  
        <input type="button" value="Add Todo" onClick={addTodoAction} />
        {successBox && (<div className="alert alert-success">operation success</div>)}
        
      </>
    );
  }

  
  export default MyTodo;