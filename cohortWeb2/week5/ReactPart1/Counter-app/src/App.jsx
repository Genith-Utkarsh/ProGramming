import { useState } from 'react'
import './App.css'



// function App() {

//   const [count, setCount] = useState(0)          // Given state Variable something which is Dynamic


//   function clickHandler(){
//     setCount(count + 1)
//     // because state updates are asynchronous in React.

//     // Updating the state on clcick of button
//   }

//   return (
//     <div>  
//       <button onClick={clickHandler}>Total count = {count}</button>
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <CustomButton count = {count} setCount = {setCount} ></CustomButton>  
//       <CustomButton count = {count + 1} setCount = {setCount} ></CustomButton> 
//       <CustomButton count = {count - 1} setCount = {setCount} ></CustomButton> 

//     </div>
//   )
// }


// function CustomButton(props){

//   function OnclickHandler() {
//     props.setCount(props.count + 1)}

//   return <button onClick={OnclickHandler}>
//     Counter = {props.count}
//   </button>
// }

// ================================================================


// Todo app dumb way

function App() {
  const [todos, setTodos] = useState([{
        title : "Gp to gym",
        description : "6pm to 7pm"
  }, 
  {
      title : "GO to study",
      description : "8pm to 10 pm"
  }
])


  function AddTodo(){
    setTodos([...todos, {
      title : "Random title",
      description : "Rndom Desciption"
    }])
  }

  return (
    <div>

      <button onClick={AddTodo}>Add random todo</button>
      {/* <Todo title = {todos[0].title} description = {todos[0].description} />
      <Todo title = {todos[1].title} description = {todos[1].description} /> */}


      {
        todos.map(function(todo){
          return <Todo title = {todo.title} description = {todo.description} />
        })
      }
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App



