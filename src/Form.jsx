function Form({onSubmit}){
  function handleChange(e){
    console.log(e.target.value)
  }
  return <form onSubmit={onSubmit}>
    <input onChange={e=>handleChange(e)} type='text' placeholder='La ToDO' />
    <input onChange={e=>handleChange(e)} type='text' placeholder='La Date'/>
    <input type='submit'/>
  </form>
}

export default Form