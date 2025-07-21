import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue , RecoilRoot, useSetRecoilState} from 'recoil'
import { todoAtomFamily } from './atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <TodoUpdater />
        <Todo id = {1} />
        <Todo id ={2} />
        <Todo id={2} />

      </RecoilRoot>
    </>
  )
}


function TodoUpdater(){
  const updateCurrentTodo = useSetRecoilState(todoAtomFamily(2))

  useEffect(() => {
    setTimeout(() =>{
      updateCurrentTodo({
        id : 2,
        title : "Updating",
        description : "Todo 2 has been updated"
      })
    }, 5000)
  }, [])
}


function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id))
  return <div>
    <h1>{currentTodo.title}</h1>
    <h4>{currentTodo.description}</h4>
  </div>
}



export default App
