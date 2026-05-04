import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function ToDo({ todo, date }) {  
  return <li>{todo} {date}</li> 
}

function App() {
  const DATE = new Date();
  
  return <>
  <h1>Nouvelle ToDO</h1>
  <h2>{DATE.toLocaleString()}</h2>
    <ul>
      <ToDo todo={'faire la vaisselle' } date={"24/11/2026"}/>
      <ToDo todo={'faire la révolution' } date={"24/10/2026"}/>
      <ToDo todo={'faire la sieste' } date={"24/12/2026"}/>
    </ul>
  </> 
}

export default App;