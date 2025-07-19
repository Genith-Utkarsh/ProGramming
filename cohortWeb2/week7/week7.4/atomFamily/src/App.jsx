import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue , RecoilRoot} from 'recoil'
import { todoAtomFamily } from './atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id = {1} />
        <Todo id ={2} />

      </RecoilRoot>
    </>
  )
}


function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return <div>
    <h1>{currentTodo.title}</h1>
    <h4>{currentTodo.description}</h4>
  </div>
}



export default App
