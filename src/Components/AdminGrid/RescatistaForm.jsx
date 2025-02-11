import {Button, FormControl, Input, Select, TextField } from "@mui/material";
import {useState,useContext,useEffect} from "react";
import { API_URL_BACKEND } from "../../data/API/env";
import { UserContext } from "../../Context/UserContext";
import { agregarRescatista } from "../../Helpers/rescatistaEndPoint";
import CheckIcon from '@mui/icons-material/Check';
import { Form } from "react-router-dom";
export default function RescatistaForm({saveData}) {
    const [data, setData] = useState({nombre:'',apellido:'',legajo:'',usuario:''});
    const [users, setUsers] = useState([]);
    const {user} = useContext(UserContext);
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${API_URL_BACKEND}User/GetUsers`, requestOptions)
  .then((response) => response.json())
  .then((result) => {console.log(result)
    const nombres = result.map((user,i) => {return {'nombre':user.userName,'id':i+1}});
    setUsers(nombres);
  })
  .catch((error) => console.error(error));
    },[])
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
    <FormControl>
        <InputLabel>Usuario</InputLabel>
        <Select value={data.usuario} onChange={handleUsuario}>
        {users.map((u)=><MenuItem key={u.id} value={u.nombre}>{u.nombre}</MenuItem>)}
        </Select>
    </FormControl>   
    <br />
    <Button onClick={handleCrearResctatista}><CheckIcon/></Button>   
    </>
}