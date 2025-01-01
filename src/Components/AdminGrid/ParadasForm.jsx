import {TextField } from "@mui/material";
import {useState} from "react";
export default function ParadasForm({saveData}) {
   const [data, setData] = useState({nombre:'',altura:''});
    const handleNom = (e) => {
            setData({...data, nombre: e.target.value});
            saveData(data);
    }
    const handleAltura = (e) => {
            setData({...data, altura: e.target.value});
            saveData(data);
    }
     return <>
    <TextField label={'Nombre de parada'} onChange={handleNom}/>
    <TextField label={'Altura'} onChange={handleAltura}/>
    </>
}