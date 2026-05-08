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



function ToDo({ todo, date, checked}) {  
  if(checked){
    return <li className="green"><input type="checkbox" defaultChecked/>{todo} {date} </li> 
  }
  return <li className="orange">{todo} {date}</li>
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
    LIST_TODO.push(<ToDoAnd key={index} todo={todo.todo} date={todo.date} checked={todo.checked}/>)
  })
  
  return <> 
  <h1>Nouvelle ToDO</h1>
  <h2>{DATE.toLocaleString()}</h2>
    <ul>
      
      {LIST_TODO}
    </ul>
    
  </> 
}

export default App;