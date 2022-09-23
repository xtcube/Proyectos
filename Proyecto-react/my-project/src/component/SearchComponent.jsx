import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'https://jsonplaceholder.typicode.com/users'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div className="grid justify-items-center px-60">
        <input value={search} onChange={searcher} type="text" placeholder='Search' className="border-2"/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className="bg-curso text-black text-start ">
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody className="border-2">
                { results.map( (user) => (
                    <tr key={user.id} className="border-2">
                        <td className="border-r-2">{user.name}</td>
                        <td>{user.username}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent