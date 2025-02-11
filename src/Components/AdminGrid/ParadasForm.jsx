import {Button, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { agregarParada } from "../../Helpers/paradasEndPoint";
import {useState,useContext} from "react";
import { UserContext } from "../../Context/UserContext";
export default function ParadasForm({saveData}) {
   const {user} = useContext(UserContext);
   const [data, setData] = useState({nombre:'',altura:''});
    const handleNom = (e) => {
            setData({...data, nombre: e.target.value});
   
    }
    const handleAltura = (e) => {
            setData({...data, altura: e.target.value});
            
    }
    const handleCrear=()=>{
        agregarParada(data,user.token);
        saveData();
    }
     return <>
    <TextField label={'Nombre de parada'} onChange={handleNom}/>
    <TextField label={'Altura'} onChange={handleAltura}/>
    <br />
    <Button onClick={handleCrear}><CheckIcon/></Button>

    </>
}