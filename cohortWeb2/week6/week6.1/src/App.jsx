import React,  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// function App() {
  

//   return (
//     <>
//         <HeaderwithButton />
//         <Header title={"Created by Utkarsh"} />
//     </>
//   )
// }

// function HeaderwithButton(){
//   const [title, setTitle] =  useState("My name is Utkarsh")

//   function changeTitle(){
//     setTitle(`My name is ${Math.random()}`)
//   }

//    return <div>
//     <button onClick={changeTitle}>Change the title</button>
//     <Header title={title} />
//    </div>
// }

// function Header({title}){
//   return <div>{title}</div>
// }


function App(){
  const [title, setTitle] = useState('My name is Utkarsh')

  function changeTitle(){
    setTitle(`My name is ${Math.random()}`)
  }
  return (
    <>
    <button onClick={changeTitle}>Change the title</button>
    <Header title = {title} />
    <Header title={"@Created by Utkarsh"} />
    <Header title={"@Created by Utkarsh"} />
    <Header title={"@Created by Utkarsh"} />
    <Header title={"@Created by Utkarsh"} />

    </>
  )
}

 const Header = React.memo(function Header({title}){
  console.log("Header rendered:", title);
  return <div>
    {title}
  </div>
})

export default App
