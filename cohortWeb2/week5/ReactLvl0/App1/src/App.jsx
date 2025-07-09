import { useState } from "react"


// function App() {
//   const [count , setCount] = useState(0)    // count = current value,   setCount = fn to update the value

//   function onClickHandler() {
//     setCount(count + 1)
//   }

//     return (
//       <div>
//         <button onClick={onClickHandler}>Count = {count}</button>
//       </div>
//     )
// }



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     < CustomButton count = {count}  setCount = {setCount}></CustomButton>
//     <CustomButton count = {count - 10}  setCount = {setCount} ></CustomButton>
//     <CustomButton count = {count + 10}  setCount = {setCount} ></CustomButton>
//     <CustomButton count = {count * 10}  setCount = {setCount} ></CustomButton>
//     </>
//   )
// }


// // Button component
// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1)
//   }

//   return <button onClick={onClickHandler}>
//     Count = {props.count}
//   </button>
// }


function App() {
  const [todos, setTodos] = useState([{
    title : "Task 1",
    description : "Wake up early",
    completed : true
  }, {
    title : "Task 2",
    description : "Learn web dev",
    completed : false
  }, {
    title : "Task 3",
    description : "Go to Gym",
    completed : true
  }])

  function addTodo(){
    setTodos([...todos, {
      title : "Random Todo",
      description :  "Random description"
    }])
  }

  return (
    <>
      {todos.map(function(todo) {
        return <Todo title  = {todo.title} description = {todo.description}></Todo>
      })}

      <button onClick={addTodo}>Add random todo</button>
    </>
  )
}



function Todo(props) {
  return <div>
      <h1> {props.title}</h1>
      <h2>{props.description}</h2>
  </div>
}

export default App