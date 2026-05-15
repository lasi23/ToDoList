import { useState } from 'react'
import { useActionState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Form from './Form'
import ToDo from './Todo.jsx'
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

function Category({mission, setMission, professionel, setProfessionel, vacance, setVacance}){
  return <section>
      <label><input type="checkbox" checked={mission} onChange={()=>setMission(!mission)}/> mission</label>
      <label><input type="checkbox" checked={professionel} onChange={()=>setProfessionel(!professionel)}/> professionel</label>
      <label><input type="checkbox" checked={vacance} onChange={()=>setVacance(!vacance)}/> vacance</label>
    </section> 
}

      
function App() {
  const DATE = new Date()
  const [vacance, setVacance] = useState(true)
  const [mission, setMission] = useState(true)
  const [professionel, setProfessionel] = useState(true)
  const [todos, formAction, isPending] = useActionState(addTodoAction, TODOS)

  async function addTodoAction(previousState, formData) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const todo = formData.get('todo')
    const date = formData.get('date')
    const categorie = formData.get('categorie')
    const NEWTODO = {
      todo,
      date,
      checked: false,
      heure: 0,
      categorie
    }
    return [...previousState, NEWTODO]
  }

  const TODOLIST = todos.filter(e => {
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
    <Form action={formAction} isPending={isPending}/>
    <Category
      mission={mission} setMission={setMission}
      professionel={professionel} setProfessionel={setProfessionel}
      vacance={vacance} setVacance={setVacance}
      />
  </>
}

export default App;