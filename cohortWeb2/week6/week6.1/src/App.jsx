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


// function App(){
//   const [title, setTitle] = useState('My name is Utkarsh')

//   function changeTitle(){
//     setTitle(`My name is ${Math.random()}`)
//   }
//   return (
//     <>
//     <button onClick={changeTitle}>Change the title</button>
//     <Header title = {title} />
//     <Header title={"@Created by Utkarsh"} />
//     <Header title={"@Created by Utkarsh"} />
//     <Header title={"@Created by Utkarsh"} />
//     <Header title={"@Created by Utkarsh"} />

//     </>
//   )
// }

//  const Header = React.memo(function Header({title}){
//   console.log("Header rendered:", title);
//   return <div>
//     {title}
//   </div>
// })




// function App(){

//   const [todos, setTodos] = useState([{
//     id : 1,
//     title : "Gym",
//     description : "Go to gym at 6pm"
//   },{
//     id : 2,
//     title : "DSA",
//     description : "Do Dsa at 9 pm"
//   },{
//     id : 3,
//     title : "Hacking",
//     description : "Its hacking time @11pm"
//   }])

//   const [count, setCount] =useState(4)

//   function addTodo(){
//     setTodos([...todos, {
//       id : count,
//       title : "Random Todo",
//       description : "Random todo description"
//     }]
//   )

//   setCount(count + 1)
//   }

//   return (
//   <>
//     <button onClick={addTodo}>Add Random todo</button>
//     {todos.map((todo) => {
//       console.log(todo.id)
//       return <Todo key = {todo.id}  title={todo.title} description={todo.description} />
//     })}
//   </>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }


// function App(){
//   return (
//     <>
//     <CardWrapper  innerComponent = {<TextComponent/>}/>
//     <CardWrapper  innerComponent = {<TextComponent2/>}/>
//     </>
//   )
// }

// function TextComponent(){
//   return <div>Text</div>
// }
// function TextComponent2(){
//   return <div>Text 2</div>
// }

// function CardWrapper({innerComponent}){
//   return <div style={{border : "2px solid black"}}>
//     {innerComponent}
//   </div>
// }


function App(){
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px', backgroundColor: '#f5f5f5' }}>
    <Card>
      Week 1 
    </Card>
    <Card>
      <InnerComponent/>
    </Card>
    </div>
  )
}


function InnerComponent(){
  return <div >
    Great Card
  </div>
}

//Card component
function Card({children}){
  // css for card
 

  const cardStyle = {
    padding: '20px',
    width: '250px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif',
  };

  return <div style={cardStyle}>
      {children}
    </div>
 
}



export default App
