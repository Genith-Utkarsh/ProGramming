import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [render, setRender] = useState(true)
  
//   useEffect(() => {
//     const interval = setInterval(() =>{
//       setRender(render => !render)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       {render ? <MyComponent /> : <div>Hello</div>}
//     </>
//   )
// }

// function MyComponent(){
//    const [count , setCount] = useState(0)

//     function incrementValue() {
//       setCount(count + 1 )
//     }

//   return <div>

//     <div>{count}</div>
//     <button  onClick={incrementValue}>Increment</button>
//   </div>
// }



// function MyComponent(){
//   useEffect(() => {
//     console.log("Component mounted")
//     return () => {
//       console.log("Component unmounted")
//     }
//   }, [])
//   return <div>
//       from inside my MyComponent
//   </div>
// }

//==========================================================


// custom hooks
// wrapper over actual hooks


function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
      axios.get("")
      .then((res) => {
        setTodos(res.data)
      })
  }, [])

  return todos
}


function App(){
  const todos = useTodos()
  return (
    
    <>
    {todos.map((todo) => <Track todo = {todo} />)}
    </>
  )
}


function Track({todo}){
  return <div>
      <h1>todo.title</h1>
      <h4>todo.description</h4>
  </div>
}

export default App
