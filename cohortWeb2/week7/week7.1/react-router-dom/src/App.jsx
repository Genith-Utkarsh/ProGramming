import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar(){
  const navigate = useNavigate()

  return (
    <>
      <div>
        <button onClick={() => {
          navigate("/")
        }}>Landing</button>
        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>

      </div>
    </>
  )
}
export default App;
