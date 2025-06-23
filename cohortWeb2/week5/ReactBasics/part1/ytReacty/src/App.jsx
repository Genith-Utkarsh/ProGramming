import { useState } from "react"

function App(){
  const name = "koko"

  function clickMe(){
    console.log("Hello")
  }

  const [user, setUser] = useState("Shadow")

  function changeUser() {
    setUser("Jinwoo sung")
  }
  return <div>
    <h1>Hello {user} </h1>
    <button onClick={clickMe}>Click buddy</button>
    <button onClick={changeUser}>Change User</button>
  </div>
}


export default App