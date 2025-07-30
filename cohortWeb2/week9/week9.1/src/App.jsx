import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent(){
   const [count , setCount] = useState(0)

    function incrementValue() {
      setCount(count + 1 )
    }
    
  return <div>

    <div>{count}</div>
    <button  onClick={incrementValue}>Increment</button>
  </div>
}

export default App
