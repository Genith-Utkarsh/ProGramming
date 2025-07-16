// import React from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Landing } from "./components/Landing";
// import { Dashboard } from "./components/Dashboard";

import { Suspense , lazy} from "react";
const Landing  = lazy( () => import('./components/Landing'))
const Dashboard = lazy( () => import('./components/Dashboard'))
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

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


function App(){
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path = "/"  element = {<Suspense fallback = {"loading..."}><Landing /></Suspense>} />
          <Route path = "/dashboard" element = {<Suspense  fallback = {"loading..."}><Dashboard /></Suspense>}  />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}


function AppBar(){
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/")}>Landing</button>
    </>
  )
}


export default App