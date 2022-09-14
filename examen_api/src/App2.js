import { useEffect, useState } from 'react';
import './App.css';

function App2() {

    const URL = "https://swapi.dev/api/people/"
    const [todos, setTodos] = useState()
    const fetchAPI = async() =>{
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }
    useEffect(()=>{
        fetchAPI()
    }, [])
    return (
        <div className="blockInfo">
            Personajes de Star Wars
            <br></br>
            <ul>
                {!todos ? "Cargando..." : todos.results.map((todo, index) => {
                return <li>{todo.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App2;