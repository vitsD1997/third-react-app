import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful list</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    //let inputRef = document.querySelector("#id1");
    //let inputValue = inputRef.value;
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];

    setList(newList);
    inputRef.current.value = "";
  };
  return (
    <>
      <input
        type="text"
        id="id1"
        ref={inputRef}
        placeholder="enter user input..."
      />
      <input type="button" value="add new item" onClick={addItemAction} />
      <h1>data</h1>
      {list.map((item) => (
        <MessageDemo message={item} />
      ))}
    </>
  );
}

function MessageDemo({ message }) {
  return (
       <>
          <h1> hello {message}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quod consequuntur! Tenetur quae accusantium ratione eius expedita
            accusamus quas, hic velit facere corporis corrupti suscipit?
          </p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </>
  )
}

export default App;
