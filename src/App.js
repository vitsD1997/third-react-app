import { useState } from "react";


function App() {
  return (
    <>
    <h1>Stateful demo</h1>
    <ListDemo />
    </>
  );
    
  
}

function ListDemo() {
 let [list, setList] = useState(["delhi"]);
 
  let addItemAction = () => {
    let newList = [...list, "mumbai"];

   console.log(newList);

   setList(newList);
  };
  return(
    <>
      <input type="button" value="add new item" onClick={addItemAction} />
      <h1>data</h1>
      {list.map((item) => (
        <>
        <h1>hello {item}</h1>
        </>
      ))}
    </>
  );
}

export default App;