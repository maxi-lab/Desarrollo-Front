import {Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {useState,useContext,useEffect} from "react";
import { UserContext } from "../../Context/UserContext";
import { agregarTurista } from "../../Helpers/turistasEndPont";
import CheckIcon from '@mui/icons-material/Check';
import { API_URL_BACKEND } from "../../data/API/env";
export default function TuristasForm({saveData}) {
    const {user} = useContext(UserContext);
    const [users,setUsers]=useState([])
    const [data, setData] = useState({nombre:'',apellido:'',dni:'',usuario:'',tel:''});
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
    const handleDni=(e)=>{
        setData({...data,dni:e.target.value})

    };
    const handleUsuario=(e)=>{
        setData({...data,usuario:e.target.value})

    };
    const handleTel=(e)=>setData({...data,tel:e.target.value})

    const save=()=>{
        agregarTurista(data,user.token);
        saveData();
    }
    return <>
        <TextField label={'Nombre de turista'} onChange={handleNombre}/>
        <TextField label={'Apellido de turista'} onChange={handleApellido}/>
        <TextField label={'DNI'} onChange={handleDni}/>
        <TextField label={'Telefono'} onChange={handleTel}/>
        <FormControl>
            <InputLabel>Usuario</InputLabel>
            <Select value={data.usuario} onChange={handleUsuario}>
                {users.map((u)=><MenuItem key={u.id} value={u.nombre}>{u.nombre}</MenuItem>)}
            </Select>
        </FormControl>
        <br />
        <Button onClick={save}><CheckIcon/></Button>
    </>
}