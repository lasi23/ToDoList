import { useState } from 'react'

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




export default ToDo