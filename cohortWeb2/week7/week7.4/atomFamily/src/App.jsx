import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue , RecoilRoot, useSetRecoilState, useRecoilValueLoadable} from 'recoil'
import { todoAtomFamily } from './atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <TodoUpdater />
        <Todo id = {1} />
        <Todo id ={2} />
        <Todo id={2} />

        <TodoLodable id = {3} />

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


function TodoLodable({id}){
  const todo = useRecoilValueLoadable(todoAtomFamily(id))

  // This todo will have contents, state , hasError, hasValue
  // contents will have the data
  // state will have the state of the data (loading, hasValue, hasError)

  if(todo.state === "loading"){
    return <div>Loading....</div>
  } else if(todo.state === "hasError"){
    return <div>Error loading todo</div>
  } else {
    return <div>
      <h1>{todo.contents.title}</h1>
      <h4>{todo.contents.description}</h4>
    </div>
  }
}


export default App
