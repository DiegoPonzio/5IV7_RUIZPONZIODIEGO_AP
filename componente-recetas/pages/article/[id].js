import router from 'next/router'
import Myheader from "../../components/Myheader"



export default function RecetasDesc(){
    const {id} = router.query

    return(
        <Myheader title="Recetas">
            <RecetasDesc></RecetasDesc>
        </Myheader>
    )
}
