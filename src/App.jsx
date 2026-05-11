import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const TODOS = [
    { todo : "conquerir le monde",
      date : "24/11/2026",
      checked : true
    },
    { todo : "obtenir mon stage",
      date : "29/12/2026",
      checked : true
    },
    { todo : "retourner au mexique",
      date : "01/01/2027",
      checked : false
    }
  ]



function ToDo({ todo, date, checked, onClick}) { 
  function handleClick(todo){
    alert(todo)
  }
  if(checked){
    return <li className="green" onClick={()=>handleClick(todo)}><input type="checkbox" defaultChecked/>{todo} {date} </li> 
  }
  return <li className="orange">{todo} {date}</li>
}

function Form({onSubmit}){
  function handleChange(e){
    console.log(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    const INPUTS = document.querySelectorAll('input[type=text]')
    INPUTS.forEach(input=>(console.log(input.value)))
  }
  return <form onSubmit={handleSubmit}>
    <input onChange={e=>handleChange(e)} type='text' placeholder='La ToDO' />
    <input onChange={e=>handleChange(e)} type='text' placeholder='La Date'/>
    <input type='submit'/>
  </form>
}

function ToDoTernaire({todo, date, checked}) {
  return <li className={checked ? "green" : 'orange'} ><input type='checkbox' checked={checked} defaultChecked/>{todo} {date} </li> 
}

function ToDoAnd({todo, date, checked}){
  return <li>
    {todo} {date}
    {checked && (
      <input type="checkbox" defaultChecked />
    )}   
  </li>
}

function App() {
  const DATE = new Date();
  const LIST_TODO = []

  TODOS.forEach((todo, index)=> {
    LIST_TODO.push(<ToDo key={index} todo={todo.todo} date={todo.date} checked={todo.checked}/>)
  })
  
  return <> 
  <h1>Nouvelle ToDO</h1>
  <h2>{DATE.toLocaleString()}</h2>
    <ul>
      
      {LIST_TODO}
    </ul>
    <Form onSubmit={e=>handleSubmit(e)}/>
    
  </> 
}

export default App;