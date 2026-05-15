function Form({action, isPending}){
    
    return <form action={action}>
        <input name="todo" type='text' placeholder='La ToDO' />
        <input name="date" type='date' placeholder='La Date'/>
        <input name="categorie" type='text' placeholder='La Catégorie'/>
        <button type='submit' disabled={isPending}>
            {isPending ? "Ajout en cours..." : "Ajouter"}
        </button>
    </form>
}

export default Form