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



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomButton count = {count} setCount = {setCount} ></CustomButton>  
      <CustomButton count = {count + 1} setCount = {setCount} ></CustomButton> 
      <CustomButton count = {count - 1} setCount = {setCount} ></CustomButton> 

    </div>
  )
}


function CustomButton(props){

  function OnclickHandler() {
    props.setCount(props.count + 1)}

  return <button onClick={OnclickHandler}>
    Counter = {props.count}
  </button>
}

export default App



