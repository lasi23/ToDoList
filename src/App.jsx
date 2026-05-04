import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function ToDo() {
  return <ul>
    <li>Sport</li>
    <li>Dessin</li>
    <li>Révision</li>
    <li>Lire</li>
  </ul>
}

function App() {
  const DATE = new Date();
  
  return <>
  <h1>Nouvelle ToDO</h1>
  <h2>Créer le :</h2>
    <p>{DATE.toLocaleString()}</p>
    <ToDo />
  </> 
}

export default App;