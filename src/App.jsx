import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const TODOS = [
    { todo : "conquerir le monde",
      date : "24/11/2026"
    },
    { todo : "obtenir mon stage",
      date : "29/12/2026"
    },
    { todo : "retourner au mexique",
      date : "01/01/2027"
    }
  ]



function ToDo({ todo, date }) {  
  return <li>{todo} {date}</li> 
}

function App() {
  const DATE = new Date();
  const LIST_TODO = []

  TODOS.forEach((todo, index)=> {
    LIST_TODO.push(<ToDo key={index} todo={todo.todo} date={todo.date}/>)
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