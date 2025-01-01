import { TextField } from '@mui/material';
import { useState } from 'react';
export function UserForm({saveData}) {
    const [data, setData] = useState({name:'',password:'',email:''});

    const handleNombre=(e)=>{
        setData({...data,name:e.target.value});
        saveData(data);
    }
    const handlePassword=(e)=>{
        setData({...data,password:e.target.value});
        saveData(data);
    }
    const handleEmail=(e)=>{
        setData({...data,email:e.target.value});
        saveData(data);
    }
    return <>
        <TextField label={'Nombre de usuario'} onChange={handleNombre}/>
        <TextField label={'Contraseña'} type="password" onChange={handlePassword}/>
        <TextField label={'Correo'} onChange={handleEmail}/>
    </>
}