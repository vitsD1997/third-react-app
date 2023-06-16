function App() {
  return (
    <>
    MessageDemo
    <MessageDemo name="vitthal" email="v@gmail.com"/>
    <MessageDemo name="amol" email="A@gmail.com"/>
    <MessageDemo name="babasaheb" email="b@gamil.com"/>
    <MessageDemo name="rghunathrao" email="r@gmail.com"/>
    </>
  );
    
  
}

function MessageDemo({email, name}) {
  return(
    <>
    <h1>Hello {name} {email}</h1>
    
    </>
  );
}

export default App;