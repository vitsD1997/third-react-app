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
    
    <h1>{data}</h1>
    {list.map((item) => item)}
  
    </>
  );
}

export default App;