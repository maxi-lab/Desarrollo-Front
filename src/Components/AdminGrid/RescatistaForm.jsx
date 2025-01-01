import {TextField } from "@mui/material";
import {useState} from "react";
export default function RescatistaForm({saveData}) {
    const [data, setData] = useState({nombre:'',apellido:'',legajo:'',usuario:''});
    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})
        saveData(data);
    };
    const handleApellido=(e)=>{
        setData({...data,apellido:e.target.value})
        saveData(data);
    };
    const handleLegajo=(e)=>{
        setData({...data,legajo:e.target.value})
        saveData(data);
    };
    const handleUsuario=(e)=>{
        setData({...data,usuario:e.target.value})
        saveData(data);
    };
    return <>
    <TextField label={'Nombre de rescatista'} onChange={handleNombre}/>
    <TextField label={'Apellido de rescatista'} onChange={handleApellido}/>
    <TextField label={'Legajo'} onChange={handleLegajo}/>
    <TextField label={'Usuario'} onChange={handleUsuario}/>    
    </>
}