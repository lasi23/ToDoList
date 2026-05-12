import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const TODOS = [
    { todo : "conquerir le monde",
      date : "24/11/2026",
      checked : true,
      heure : 0,
      category : 'mission'
    },
    { todo : "obtenir mon stage",
      date : "29/12/2026",
      checked : true,
      heure : 0,
      category : 'professionel'
    },
    { todo : "retourner au mexique",
      date : "01/01/2027",
      checked : false,
      heure : 0,
      category : 'vacance'
    }
  ]

function ToDo({ todo, heureRestante, onClick }) {

  const [heure, setHeure] = useState( heureRestante )

  

  function handleClick() {
    // alert(todo.todo)
  }
  function handleClickMinus(){
    if (heure > 0){
      setHeure(heure - 1)   
  }
}
  function handleClickPlus(){
    setHeure(heure + 1)
  }

  if (todo.checked) {
    return (
      <li className='green' onClick={handleClick}>
        <input type='checkbox' defaultChecked />
        <button onClick={handleClickMinus}>-</button>
        {heure}  
        <button onClick={handleClickPlus}>+</button>
        {todo.todo} - {todo.date} - {todo.category} à faire dans : {heure} 
      </li>
    )
  }
  return <li className='orange' onClick={handleClick}>{todo.todo} - {todo.date} - {todo.category}</li>
}

function Category({mission, setMission, professionel, setProfessionel, vacance, setVacance}){
  return <section>
      <label><input type="checkbox" checked={mission} onChange={()=>setMission(!mission)}/> mission</label>
      <label><input type="checkbox" checked={professionel} onChange={()=>setProfessionel(!professionel)}/> professionel</label>
      <label><input type="checkbox" checked={vacance} onChange={()=>setVacance(!vacance)}/> vacance</label>
    </section> 
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

// function ToDoTernaire({todo, date, checked}) {
//   return <li className={checked ? "green" : 'orange'} ><input type='checkbox' checked={checked} defaultChecked/>{todo} {date} </li> 
// }

// function ToDoAnd({todo, date, checked}){
//   return <li>
//     {todo} {date}
//     {checked && (
//       <input type="checkbox" defaultChecked />
//     )}   
//   </li>
// }

function App() {
  const DATE = new Date()
  const [vacance, setVacance] = useState(true)
  const [mission, setMission] = useState(true)
  const [professionel, setProfessionel] = useState(true)

  const TODOLIST = TODOS.filter(e => {
    if (e.category == 'vacance' && !vacance) return false
    if (e.category == 'professionel' && !professionel) return false
    if (e.category == 'mission' && !mission) return false
    return true
  })

  const LIST_TODO = TODOLIST.map((todo, index) => (
    <ToDo key={index} todo={todo} heureRestante={todo.heure} />
  ))

  return <>
    <h1>Nouvelle ToDo</h1>
    <h2>{DATE.toLocaleString()}</h2>
    <ul>{LIST_TODO}</ul>
    <Form />
    <Category
      mission={mission} setMission={setMission}
      professionel={professionel} setProfessionel={setProfessionel}
      vacance={vacance} setVacance={setVacance}
    />
  </>
}

export default App;