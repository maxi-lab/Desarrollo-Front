import {Button, TextField } from "@mui/material";
import {useState,useContext} from "react";
import { UserContext } from "../../Context/UserContext";
import { agregarRescatista } from "../../Helpers/rescatistaEndPoint";
import CheckIcon from '@mui/icons-material/Check';
export default function RescatistaForm({saveData}) {
    const [data, setData] = useState({nombre:'',apellido:'',legajo:'',usuario:''});
    const {user} = useContext(UserContext);

    const handleNombre=(e)=>{
        setData({...data,nombre:e.target.value})

    };
    const handleApellido=(e)=>{
        setData({...data,apellido:e.target.value})

    };
    const handleLegajo=(e)=>{
        setData({...data,legajo:e.target.value})
    };
    const handleUsuario=(e)=>{
        setData({...data,usuario:e.target.value})
    };
    const handleCrearResctatista=()=>{
        agregarRescatista(data,user.token);
        saveData();
    }
    return <>
    <TextField label={'Nombre de rescatista'} onChange={handleNombre}/>
    <TextField label={'Apellido de rescatista'} onChange={handleApellido}/>
    <TextField label={'Legajo'} onChange={handleLegajo}/>
    <TextField label={'Usuario'} onChange={handleUsuario}/> 
    <br />
    <Button onClick={handleCrearResctatista}><CheckIcon/></Button>   
    </>
}