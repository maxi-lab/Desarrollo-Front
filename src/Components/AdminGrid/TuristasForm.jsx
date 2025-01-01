import {TextField } from "@mui/material";
import {useState} from "react";
export default function TuristasForm({saveData}) {
    const [data, setData] = useState({nombre:'',apellido:'',dni:'',usuario:''});
    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})
        saveData(data);
    };
    const handleApellido=(e)=>{
        setData({...data,apellido:e.target.value})
        saveData(data);
    };
    const handleDni=(e)=>{
        setData({...data,dni:e.target.value})
        saveData(data);
    };
    const handleUsuario=(e)=>{
        setData({...data,usuario:e.target.value})
        saveData(data);
    };

    return <>
        <TextField label={'Nombre de turista'} onChange={handleNombre}/>
        <TextField label={'Apellido de turista'} onChange={handleApellido}/>
        <TextField label={'DNI'} onChange={handleDni}/>
        <TextField label={'Usuario'} onChange={handleUsuario}/>
    </>
}