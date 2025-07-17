// import React from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Landing } from "./components/Landing";
// import { Dashboard } from "./components/Dashboard";

import { Suspense , lazy, useContext, useState} from "react";
const Landing  = lazy( () => import('./components/Landing'))
const Dashboard = lazy( () => import('./components/Dashboard'))
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CountContext } from "./context";

// function App() {
  
//   return (
//     <div>
      
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar(){
//   const navigate = useNavigate()

//   return (
//     <>
//       <div>
//         <button onClick={() => {
//           navigate("/")
//         }}>Landing</button>
//         <button onClick={() => {
//           navigate("/dashboard")
//         }}>Dashboard</button>

//       </div>
//     </>
//   )
// }
// export default App;


//======================



// lazy loading


// function App(){
//   return (
//     <>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path = "/"  element = {<Suspense fallback = {"loading..."}><Landing /></Suspense>} />
//           <Route path = "/dashboard" element = {<Suspense  fallback = {"loading..."}><Dashboard /></Suspense>}  />
//         </Routes>
//       </BrowserRouter>
    
//     </>
//   )
// }


// function AppBar(){
//   const navigate = useNavigate()

//   return (
//     <>
//       <button onClick={() => navigate("/dashboard")}>Dashboard</button>
//       <button onClick={() => navigate("/")}>Landing</button>
//     </>
//   )
// }




//=====================================================



function App(){
  const [count , setCount] = useState(0)

  return (
    <>
        <CountContext.Provider  value={{count, setCount}}   >
          <Count />
        </CountContext.Provider>
          
    </>
  )
}

function Count(){
    return <div>
      <CountRenderer  />
      <Buttons />  
    </div>
}

function CountRenderer(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={ () => setCount(count + 1)} >Increase</button>
    <button onClick={() => setCount(count + 1 )}>Decrease</button>
  </div>
}

export default App