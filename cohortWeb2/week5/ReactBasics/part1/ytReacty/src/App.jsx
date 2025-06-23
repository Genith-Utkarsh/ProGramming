function App(){
  const name = "koko"

  function clickMe(){
    console.log("Hello")
  }


  return <div>
    <h1>Hello {user} </h1>
    <button onClick={clickMe}>Click buddy</button>
  </div>
}


export default App