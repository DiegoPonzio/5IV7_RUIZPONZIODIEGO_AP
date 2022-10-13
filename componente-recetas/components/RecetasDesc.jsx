import styles from '../styles/Recetas.module.css'


export default function RecetasDesc({
    img = 'https://static.bonviveur.es/tags/recetas-cocina-internacional.jpg',
    desc = 'desc', meal = 'nombre', link = 'https://www.youtube.com/embed/caVnFjmoSwk'
}){

    return(
        <div className={styles.conatiner}>
            <div className={styles.card}>
                <img src={img} alt={`Imagen de: ${meal}`} className={styles.imgr}></img>
                <div className={styles.name}>{meal}</div>
                <p className={styles.ptext}>{desc}</p>
                <iframe  height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button type="submit" className={styles.button}>Regresar</button>
            </div>
            <styles jsx>{`
            
                iframe{
                    width: 100%;
                }

            `}</styles>
        </div>
    )

}