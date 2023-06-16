import { useState } from "react";


function App() {
  return (
    <>
    <h1>Stateful list</h1>
    <ListDemo />
    </>
  );
    
  
}

function ListDemo() {
 let [list, setList] = useState(["delhi"]);
 
  let addItemAction = () => {
   let inputRef = document.querySelector("#id1");
   let inputValue = inputRef.value;

   let newList = [inputValue, ...list];
    
   setList(newList);
   inputRef.value = "";
  };
  return(
    <>
       <input type="text" id="id1" placeholder="enter user input..." />
      <input type="button" value="add new item" onClick={addItemAction} />
      <h1>data</h1>
      {list.map((item) => (
        <>
        <h1> {item}</h1>
        </>
      ))}
    </>
  );
}

export default App;