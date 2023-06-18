import { useState } from "react";
import "./App.css";

function ContactUs() {
  const [successBox, setSuccessBox] = useState(false);
  const [todo, setTodo] = useState({ task: "", description: "" });
  const [emailError, setEmailError] = useState("");

  const handleChnageTaskAction = (e) => {
    const newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  const handleChangeDescriptionAction = (e) => {
    const newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addTodoAction = () => {
    if (!validateEmail(todo.task)) {
      setEmailError("Invalid email address");
      return;
    }

    const url = `http://localhost:4000/addTodo?task=${todo.task}&description=${todo.description}`;
    fetch(url);

    const newTodo = { task: "", description: "" };
    setTodo(newTodo);

    setEmailError("");
    setSuccessBox(true);
    setTimeout(() => setSuccessBox(false), 5000);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Khargar, N15</div>
            <div className="text-two">Mumbai 06</div>
            <div className="phone details"> </div>
            <div className="topic">Phone</div>
            <div className="text-one">+9184 5979 7302</div>
            <div className="text-two">+9197 6534 3537</div>
            <div className="email details"></div>
            <div className="topic">Email</div>
            <div className="text-one">aniket@ccat.com</div>
            <div className="text-two">kundan@ccat.com</div>
          </div>
         
           
            
          
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-9">
            <h1>Send us a message</h1>
            <p>
              If you have any work for me or any types of queries related to my
              tutorial, you can send me a message from here. It's my pleasure
              to help you.
            </p>
            <input
              className={`form-control form-control-lg mb-2 ${
                emailError && "is-invalid"
              }`}
              type="email"
              placeholder="Enter email"
              value={todo.task}
              onChange={handleChnageTaskAction}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
            <textarea
              className="form-control mb-2"
              cols="30"
              rows="3"
              placeholder="Enter message"
              value={todo.description}
              onChange={handleChangeDescriptionAction}
            ></textarea>
            <div className="row justify-content-center">
              <input type="button" value="Submit" onClick={addTodoAction} />
              {successBox && (
                <div className="alert alert-success">Operation success</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
