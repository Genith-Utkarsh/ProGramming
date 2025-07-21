import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {

//   return (
//     <><div  style={{display : "flex", justifyContent : "space-between"}}>
//       <div style={{background : "green"}}>Box 1</div>
//       <div style={{background : "red"}}>Box 2</div>
//       <div style={{background : "blue"}}>Box 3</div>
//       </div>
//     </>
//   )
// }

// return (
//   <><div  style={{display : "flex", justifyContent : "space-around"}}>
//     <div style={{background : "green"}}>Box 1</div>
//     <div style={{background : "red"}}>Box 2</div>
//     <div style={{background : "blue"}}>Box 3</div>
//     </div>
//   </>
// )
// }

// Tailwind

function App() {
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-green-500 p-4">Box 1</div>
        <div className="bg-red-500 p-4">Box 2</div>
        <div className="bg-blue-500 p-4">Box 3</div>
      </div>
    </>
  )
}

export default App;
