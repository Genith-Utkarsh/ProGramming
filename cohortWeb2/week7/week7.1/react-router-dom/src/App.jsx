import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing} from './components/Landing';
import {Dashboard} from './components/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path = "/" element = {<Landing />} />
        <Route path = "/dashboard" element = {<Dashboard /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
