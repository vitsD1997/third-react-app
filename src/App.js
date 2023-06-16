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
  let list = ["mumbai", "delhi", "calcutta"];
  return(
    <>
      {list.map((item) => (
        <>
        <h1>hello world</h1>
        </>
      ))}

     {list.map((item) => "hello" + item)}

     <hr/>
    <h1>{data}</h1>
    {list.map((item) => item)}
  
    </>
  );
}

export default App;