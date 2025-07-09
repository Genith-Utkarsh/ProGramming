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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < CustomButton count = {count}  setCount = {setCount}></CustomButton>
    </>
  )
}


// Button component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1)
  }

  return <button onClick={onClickHandler}>
    Count = {props.count}
  </button>
}

export default App