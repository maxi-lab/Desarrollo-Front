
import { Button, TextField } from '@mui/material';
import { useState,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { agregarUser } from "../../Helpers/usersEndPoint";
import CheckIcon from '@mui/icons-material/Check';
export function UserForm({saveData}) {
    const {user} = useContext(UserContext);

    const [data, setData] = useState({name:'',password:'',email:''});

    const handleNombre=(e)=>{
        setData({...data,name:e.target.value});
    }
    const handlePassword=(e)=>{
        setData({...data,password:e.target.value});
    }
    const handleEmail=(e)=>{
        setData({...data,email:e.target.value});
    }
    const handleCrearUser=()=>{
    agregarUser(data,user.token);
    saveData(); 
    }
    return <>
        <TextField label={'Nombre de usuario'} onChange={handleNombre}/>
        <TextField label={'Contraseña'} type="password" onChange={handlePassword}/>
        <TextField label={'Correo'} onChange={handleEmail}/>
        <br />
        <Button onClick={handleCrearUser}><CheckIcon/></Button>
    </>
}