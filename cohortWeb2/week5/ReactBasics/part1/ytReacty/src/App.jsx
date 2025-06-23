function App(){
  const name = "koko"

  function clickMe(){
    console.log("Hello")
  }

  let user = "Shadow"

  function changeUser(){
    user = "Jinwoo Sung"
  }

  return <div>
    <h1>Hello {user} </h1>
    <button onClick={clickMe}>Click buddy</button>
    <button onClick={changeUser}>Chnge user</button>
  </div>
}


export default App