import { Typography } from "@mui/material";
import Asistencias from "./Asistencias";
import Solicitudes from "./SolicitudesTable";


export default function RescatistaGrid(){
    
    return <>
        <Typography>Solicitudes</Typography>
        <Solicitudes/>
        <Typography>Asistencias</Typography>
        <Asistencias/>
    </>
}