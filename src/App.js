function App() {
  return (
    <>
    <h1>props demo</h1>
    <ListDemo />
    </>
  );
    
  
}

function ListDemo() {
  let data = "hello universe";
  let list = ["", "", "", "", ""];

  let list1 = [];
  for (let i = 0; i < 100; i++){
    list1.push("");
  }
  return(
    <>

      <h1>{data}</h1>
      {list.map((item) => (
        <>
        <h1>hello world</h1>
        </>
      ))}

     {list1.map((item) =>(
      <div>
        <h1>hello universe</h1>
      </div>
     ))}
    </>
  );
}

export default App;