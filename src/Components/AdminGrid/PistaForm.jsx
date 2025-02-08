import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { useState,useContext } from "react"; 
import { agregarPista } from "../../Helpers/pistasEndPont";  
import CheckIcon from '@mui/icons-material/Check';

export default function PistaForm({saveData}) {
   const {user}=useContext(UserContext);
    const [formData, setFormData] = useState({
        nombre: '',
        dificultad: '',
        paradaTerminal: '',
        transporte: ''
    });
   const handleNom = (e) => {
         setFormData({...formData, nombre: e.target.value});
        
   }
    const handlDif = (e) => {
          setFormData({...formData, dificultad: e.target.value});
          
     }
    const handleParada = (e) => {
        setFormData({...formData, paradaTerminal: e.target.value});
        
    }
    const handleTransporte = (e) => {
        console.log(e.target.value);
        setFormData({...formData, transporte: e.target.value});
       
    }
    const handleCrearPista = () => {
        agregarPista(formData, user.token);
        saveData();
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
    <br />
    <Button onClick={handleCrearPista}><CheckIcon/></Button>
    </>
}