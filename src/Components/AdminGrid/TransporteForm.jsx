import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";

export default function TransporteForm({saveData}) {
    const [data, setData] = useState({nombre:'',capacidad:'',tipo:''});
    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})
        saveData(data);
    };
    const handlecaCacidad=(e)=>{
        setData({...data,capacidad:e.target.value})
        saveData(data);
    };
    const handleTipo=(e)=>{
        setData({...data,tipo:e.target.value})
        saveData(data);
    };
    return <>
    <TextField label={'Nombre de transporte'} onChange={handleNombre}/>
    <TextField label={'Capacidad'} onChange={handlecaCacidad}/>
    <RadioGroup defaultValue={"0"} onChange={handleTipo} >
        <FormControlLabel value={"0"} control={<Radio/>} label="Poma"/>
        <FormControlLabel value={"1"} control={<Radio/>} label="Telesilla"/>    
    </RadioGroup> 
    </>
}