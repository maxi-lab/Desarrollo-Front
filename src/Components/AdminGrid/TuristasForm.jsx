import {Button, TextField } from "@mui/material";
import {useState,useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { agregarTurista } from "../../Helpers/turistasEndPont";
import CheckIcon from '@mui/icons-material/Check';
export default function TuristasForm({saveData}) {
    const {user} = useContext(UserContext);
    const [data, setData] = useState({nombre:'',apellido:'',dni:'',usuario:'',tel:''});
    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})

    };
    const handleApellido=(e)=>{
        setData({...data,apellido:e.target.value})

    };
    const handleDni=(e)=>{
        setData({...data,dni:e.target.value})

    };
    const handleUsuario=(e)=>{
        setData({...data,usuario:e.target.value})

    };

    const save=()=>{
        agregarTurista(data,user.token);
        saveData();
    }
    return <>
        <TextField label={'Nombre de turista'} onChange={handleNombre}/>
        <TextField label={'Apellido de turista'} onChange={handleApellido}/>
        <TextField label={'DNI'} onChange={handleDni}/>
        <TextField label={'Usuario'} onChange={handleUsuario}/>
        <TextField label={'Telefono'} onChange={(e)=>setData({...data,tel:e.target.value})}/>
        <br />
        <Button onClick={save}><CheckIcon/></Button>
    </>
}