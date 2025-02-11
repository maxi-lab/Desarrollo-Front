import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import RescatistaGrid from "../../Components/Asistencias/RescatistaGrid"
import TuristaTable from "../../Components/Asistencias/TuristaTable"
import { Heading } from "../../Components/Heading/Headiing"

export default function AsistenciaPage(){
    const {user}=useContext(UserContext)
    
    
    return <>
    <Heading/>
    {user.rol==='Rescatista'?<RescatistaGrid/>:<TuristaTable/>}
    </>
}