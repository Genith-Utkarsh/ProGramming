import { useCallback, useEffect, useMemo, useState , memo} from 'react'
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


// function App(){
//   const [id, setId] = useState(1)

//   function genId(){
//     setId(Math.floor(Math.random() * 4 + 1) )
//   }

//   return (
//     <div>
//       <button onClick={genId}>Get Todo</button>
//       <Todo id={id} />
//     </div>
//   )
// }

// function Todo({id}){
//   const [todos, setTodos] = useState([])

//   useEffect(()=>{
//     axios.get(`https://expresstodobackend.onrender.com/todos/${id}`)
//     .then((responce) => {
//       setTodos(responce.data)
//     })
//   }, [id])

//   return <div>
//     <h1>{todos.title}</h1>
//     <h5>{todos.description}</h5>
//   </div>

// }

// =====================================================

// function App(){
//   const [id, setId] = useState()

//   return (
//     <>
//     <button onClick={()=>{
//       setId(1)
//     }}>1</button>
//     <button onClick={() => {
//       setId(2)
//     }}>2</button>
//     <button onClick={()=>{
//       setId(3)
//     }}>3</button>
//     <button onClick={() =>{
//       setId(4)
//     }}>4</button>
//     <button onClick={() =>{
//       setId(5)
//     }}>5</button>
    
//     <Display  id={id}/>
    

//     </>
//   )

// }

// function Display({id}){
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get(`https://expresstodobackend.onrender.com/todos/${id}`)
//     .then((responce) => {
//       setTodos(responce.data)
//     })
//   }, [id])

//   return <div>
//     <h1>{todos.title}</h1>
//     <h5>{todos.description}</h5>
//   </div>
// }


//================================================


// function App(){
//   const [counter, setCounter] = useState(0)
//   const [inputValue, setInputValue] = useState(1)
  

//   let sum = useMemo(() => {
//     let sum = 0
//     for(let i = 1 ; i <= inputValue ; i++ ){
//       sum += i
//     }
//     return sum
//   }, [inputValue])

//   return( <div>
//     <input placeholder='Enter number' onChange={function(e) {
//       setInputValue(e.target.value) 
//     }} />

//     <br />

//     <div> `The sum from 1 till {inputValue} is {sum}`</div>
//     <br />

//     <button onClick={() => {
//       setCounter(counter + 1)
//     }}>Counter is {counter}</button>

//   </div>
//   )
// }


// ==========================================================

function App(){
    const [count , setCount] = useState(0)

    const a = useCallback(function() {
        console.log("Function called")
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter = {count}</button>

            <Demo inputFunction = {a} />
        </div>
    )
}

const Demo = memo(function Demo({a}){
    console.log("renderer")
    return <div>
        Hey there
    </div>
})


export default App
