import { useState } from 'react'
import './App.css'



function App() {

  const [count, setCount] = useState(0)          // Given state Variable something which is Dynamic


  function clickHandler(){
    setCount(count + 1)
    // because state updates are asynchronous in React.

    // Updating the state on clcick of button
  }

  return (
    <div>  
      <button onClick={clickHandler}>Total count = {count}</button>
    </div>
  )
}

export default App

