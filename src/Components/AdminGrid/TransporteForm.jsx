import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState,useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { agregarTransporte } from "../../Helpers/transporteEndPoint";
import CheckIcon from '@mui/icons-material/Check';

export default function TransporteForm({saveData}) {
    const {user} = useContext(UserContext);
    const [data, setData] = useState({nombre:'',capacidad:'',tipo:''});
    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})
    };
    const handlecaCacidad=(e)=>{
        setData({...data,capacidad:e.target.value})    
    };
    const handleTipo=(e)=>{
        setData({...data,tipo:e.target.value})
    };
    const save=()=>{
        agregarTransporte(data,user.token);
        saveData();
    }
    return <>
    <TextField label={'Nombre de transporte'} onChange={handleNombre}/>
    <TextField label={'Capacidad'} onChange={handlecaCacidad}/>
    <RadioGroup defaultValue={"0"} onChange={handleTipo} >
        <FormControlLabel value={"0"} control={<Radio/>} label="Poma"/>
        <FormControlLabel value={"1"} control={<Radio/>} label="Telesilla"/>    
    </RadioGroup> 
    <br />
    <Button onClick={save}><CheckIcon/></Button>
    </>
}