import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState,useContext,useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import {agregarPunto} from "../../Helpers/puntosEndPoint";
import CheckIcon from '@mui/icons-material/Check';
import { API_URL_BACKEND } from "../../data/API/env";
export default function PuntoInteresFor({saveData}) {
    const [data, setData] = useState({nombre:'',tipo:'',parada:''});   
    const [paradas, setParadas] = useState([]); 
    const {user} = useContext(UserContext);
    useEffect(()=>{
        fetch(`${API_URL_BACKEND}Paradas`)
        .then((response) => response.json())
        .then((result) => {
            const nombres = result.map((parada,i) => {return {'nombre':parada.nombre,'id':i+1}});
            setParadas(nombres);
        }).catch((error) => console.error(error));
    },[])    
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
    <FormControl>
        <InputLabel>Parada</InputLabel>
        <Select value={data.parada} onChange={handleParada}>
                {paradas.map((p)=><MenuItem key={p.id} value={p.id}>{p.nombre}</MenuItem>)}
        </Select>
    </FormControl>
    <br />
    <Button onClick={handleCrearPunto}><CheckIcon/></Button>
    </>
}