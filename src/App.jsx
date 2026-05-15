import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Form from './Form'
import './App.css'


const TODOS = [
    { todo : "conquerir le monde",
      date : "24/11/2026",
      checked : true,
      heure : 10,
      category : 'mission'
    },
    { todo : "obtenir mon stage",
      date : "29/12/2026",
      checked : true,
      heure : 70,
      category : 'professionel'
    },
    { todo : "retourner au mexique",
      date : "01/01/2027",
      checked : false,
      heure : 50,
      category : 'vacance'
    }
  ]

function ToDo({todo}) {

  const [heure, setHeure] = useState( todo.heure )

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

  if(heure == 0){
    return <li className='green'><button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button><input type='checkbox' defaultChecked/>{todo.todo} - {todo.date} : {heure} heure restante</li>
  }
  return <li className='orange'><button onClick={handleClickMinus}>-</button><button onClick={handleClickPlus}>+</button>{todo.todo} - {todo.date} : {heure} heure restante</li>
}

//   if (todo.checked) {
//     return (
//       <li className='green' onClick={handleClick}>
//         <input type='checkbox' defaultChecked />
//         <button onClick={handleClickMinus}>-</button>
//         {heure}  
//         <button onClick={handleClickPlus}>+</button>
//         {todo.todo} - {todo.date} - {todo.category} à faire dans : {heure} 
//       </li>
//     )
//   }
//   return <li className='orange' onClick={handleClick}>{todo.todo} - {todo.date} - {todo.category}</li>
// }

function Category({mission, setMission, professionel, setProfessionel, vacance, setVacance}){
  return <section>
      <label><input type="checkbox" checked={mission} onChange={()=>setMission(!mission)}/> mission</label>
      <label><input type="checkbox" checked={professionel} onChange={()=>setProfessionel(!professionel)}/> professionel</label>
      <label><input type="checkbox" checked={vacance} onChange={()=>setVacance(!vacance)}/> vacance</label>
    </section> 
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
  
    function handleSubmit(e){
      e.preventDefault()
      const INPUTS = document.querySelectorAll('input[type=text]')
      INPUTS.forEach(input=>(console.log(input.value)))
    }

  return <>
    <h1>Nouvelle ToDo</h1>
    <h2>{DATE.toLocaleString()}</h2>
    <ul>{LIST_TODO}</ul>
    <Form onSubmit={event => handleSubmit(event)}/>
    <Category
      mission={mission} setMission={setMission}
      professionel={professionel} setProfessionel={setProfessionel}
      vacance={vacance} setVacance={setVacance}
      />
  </>
}

export default App;