import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Project</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6">
          <h1>Registraton App</h1>
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter user input..."
          />
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter Password..."
          />
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter Email..."
          />
          <input type="button" value="Login" onClick={addItemAction} />
        </div>
      </div>
    </>
  );
}

export default App;
