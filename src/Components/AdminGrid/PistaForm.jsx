import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";   

export default function PistaForm({saveData}) {
    const [formData, setFormData] = useState({
        nombre: '',
        dificultad: '',
        paradaTerminal: '',
        transporte: ''
    });
   const handleNom = (e) => {
         setFormData({...formData, nombre: e.target.value});
         saveData(formData);
   }
    const handlDif = (e) => {
          setFormData({...formData, dificultad: e.target.value});
          saveData(formData);
     }
    const handleParada = (e) => {
        setFormData({...formData, paradaTerminal: e.target.value});
        saveData(formData);
    }
    const handleTransporte = (e) => {
        console.log(e.target.value);
        setFormData({...formData, transporte: e.target.value});
        saveData(formData);
    }
    
   return <>
   
    <TextField label={'Nombre de pista'} onChange={handleNom} onClick={()=>saveData(formData)}/>
    <RadioGroup defaultValue={"Muy Facil"} onChange={handlDif}  onClick={()=>saveData(formData)}>
    <FormControlLabel value={"Muy Facil"} control={<Radio/>} label="Muy Facil"/>
    <FormControlLabel
        value="Facil"
        control={<Radio />}
        label="Facil"/>
    <FormControlLabel value={"Intermedio"} control={<Radio/>} label="Intermedio"/>
    <FormControlLabel value={"Dificil"} control={<Radio/>} label="Dificil"/>    
    </RadioGroup> 
    <TextField label={'Parada terminal'} onChange={handleParada} onClick={()=>saveData(formData)}/>
    <TextField label={'Transporte'} onChange={handleTransporte} onClick={()=>saveData(formData)}/>
    
    </>
}