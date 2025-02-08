import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState,useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {agregarPunto} from "../../Helpers/puntosEndPoint";
import CheckIcon from '@mui/icons-material/Check';
export default function PuntoInteresFor({saveData}) {
    const [data, setData] = useState({nombre:'',tipo:'',parada:''});    
    const {user} = useContext(UserContext);
    const handleNom = (e) => {
            setData({...data, nombre: e.target.value});
            
    }
    const handleTipo = (e) => {
            setData({...data, tipo: e.target.value});
            
    }
    const handleParada = (e) => {
            setData({...data, parada: e.target.value});
            
    }
    const handleCrearPunto=()=>{
        agregarPunto(data,user.token);
        saveData();
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
    <br />
    <Button onClick={handleCrearPunto}><CheckIcon/></Button>
    </>
}