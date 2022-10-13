import router from 'next/router'
import styles from '../styles/Recetas.module.css'


export default function Recetas({
    img = 'https://static.bonviveur.es/tags/recetas-cocina-internacional.jpg',
    tags = 'tags', meal = 'nombre', category = 'categoria', area= 'Pais', id = 1, link = 'https://www.youtube.com/channel/UCOoqvyaHSH0_eBpP7pFj9qg'
}){

    /*const handleClick = (e) =>{
        e.preventDefault()
        router.push('/article/[id]', `/article/${id}`)
    }*/

    return(
        <div className={styles.conatiner}>
            <div className={styles.card}>
                <img src={img} alt={`Imagen de: ${meal}`} className={styles.imgr}></img>
                <span className={styles.tag}>{category}</span>
                <span className={styles.tag}>{area}</span>
                <span className={styles.tag}><a href={link}>Video</a></span>
                <div className={styles.name}>{meal}</div>
                <p className={styles.ptext}>{tags}</p>
                <button type="submit" className={styles.button}>Learn more...</button>
            </div>
        </div>
    )

}