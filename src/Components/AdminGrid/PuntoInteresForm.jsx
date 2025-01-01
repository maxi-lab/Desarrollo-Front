import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
export default function PuntoInteresFor({saveData}) {
    const [data, setData] = useState({nombre:'',tipo:'',parada:''});
    const handleNom = (e) => {
            setData({...data, nombre: e.target.value});
            saveData(data);
    }
    const handleTipo = (e) => {
            setData({...data, tipo: e.target.value});
            saveData(data);
    }
    const handleParada = (e) => {
            setData({...data, parada: e.target.value});
            saveData(data);
    }
    return <>
    <TextField label={'Nombre de punto de interés'} onChange={handleNom}/>
    <RadioGroup defaultValue={"0"}  onChange={handleTipo}>
    <FormControlLabel value={"0"} control={<Radio/>} label="Restaurante"/>
    <FormControlLabel value={"1"} control={<Radio/>} label="Centro de Atencion"/>
    <FormControlLabel value={"2"} control={<Radio/>} label="Rental"/>
    <FormControlLabel value={"3"} control={<Radio/>} label="Centro Medico"/>
    </RadioGroup>
    <TextField label={'Parada'} onChange={handleParada}/>
    </>
}