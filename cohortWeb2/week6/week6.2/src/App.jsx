import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://expresstodobackend.onrender.com/todos")
//     .then(function(responce){
//       console.log(responce.data)
//       setTodos(responce.data)
//     })
//   }, [])   // empty arrayt indicates it will run only once



//   return (
//     <>
//       {todos.map((todo) => {
//         return <Todo   title={todo.title} description={todo.description} />
//       })}
//     </>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

//=================================================

// gETTing todo by its id


function App(){
  const [id, setId] = useState(1)

  function genId(){
    setId(Math.floor(Math.random() * 4 + 1) )
  }

  return (
    <div>
      <button onClick={genId}>Get Todo</button>
      <Todo id={id} />
    </div>
  )
}

function Todo({id}){
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get(`https://expresstodobackend.onrender.com/todos/${id}`)
    .then((responce) => {
      setTodos(responce.data)
    })
  }, [id])

  return <div>
    <h1>{todos.title}</h1>
    <h5>{todos.description}</h5>
  </div>

}

export default App
