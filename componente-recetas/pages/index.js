import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Myheader from '../components/Myheader'
import Recetas from '../components/Recetas'
import styles from '../styles/Home.module.css'

export default function Home() {

  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
  const [receta, setReceta] = useState()
  const fetchApi = async () =>{
    const response = await fetch(URL)
    const responseJSON = await response.json()
    setReceta(responseJSON.meals)
  }

  useEffect(() =>{
    fetchApi()
  }, [])

  return (
    <Myheader title="Home">
      <div className={styles.container}>
        
        {!receta ? <h1>Cargando...</h1> : receta.map(todo =>{
          return <Recetas meal={todo.strMeal} img={todo.strMealThumb} tags={todo.strTags} category={todo.strCategory} area={todo.strArea}
          link={todo.strYoutube} />
        })}
      </div>
    </Myheader>
  )
}
