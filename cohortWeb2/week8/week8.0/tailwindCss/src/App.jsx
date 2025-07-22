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

// function App() {
//   return (
//     <>
//       <div className="flex justify-between">
//         <div>Box 1</div>
//         <div>Box 2</div>
//         <div>Box 3</div>

//       </div>
//     </>
//   )
// }


//Equal width with cols
// function App() {
//   return (
//     <>
//       <div className="grid grid-cols-3">
//         <div style={{background :"green"}}>Box 1</div>
//         <div style={{background : "blue"}}>Box 2</div>
//         <div style={{background : "red"}}>Box 3</div>

//       </div>
//     </>
//   )
// }



// function App() {
//   return (
//     <>
//       <div className="grid grid-cols-12">
//         <div className="col-span-3  bg-green-500">Box 1</div>
//         <div className="col-span-7 bg-red-500">Box 2</div>
//         <div className="col-span-2 bg-yellow-500" >Box 3</div>

//       </div>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <div className="grid grid-cols-12">
//         <div className="col-span-4  md: col-span-3 ">Box 1</div>
//         <div className="col-span-4  md: col-span-8">Box 2</div>
//         <div className="col-span-4  md : col-span-1">Box 3</div>

//       </div>
//     </>
//   )
// }


// background and fonts



function App() {
  return (
    <>
      <div className="bg-black" >
        <div className="text-white">Hey There</div>
      </div>
    </>
  )
}


export default App;
