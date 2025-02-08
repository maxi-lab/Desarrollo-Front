import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Select, TextField,InputLabel,MenuItem } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { useState,useContext,useEffect } from "react"; 
import { agregarPista } from "../../Helpers/pistasEndPont";  
import CheckIcon from '@mui/icons-material/Check';
import { API_URL_BACKEND } from "../../data/API/env";

export default function PistaForm({saveData}) {
   const {user}=useContext(UserContext);
   const [paradasTerminales, setParadasTerminales] = useState([]);
    const [transportes, setTransportes] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        dificultad: '',
        paradaTerminal: '',
        transporte: ''
    });
    useEffect(()=>{

        const requestOptions = {
         method: "GET",
         redirect: "follow"
        };

    fetch(`${API_URL_BACKEND}Paradas`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
    const nombres = result.map((parada,i) => {return {'nombre':parada.nombre,'id':i+1}});
    setParadasTerminales(nombres);
  })
  .catch((error) => console.error(error));
    fetch(`${API_URL_BACKEND}Transporte`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
    const nombres = result.map((transporte,i) => {return{'nombre':transporte.nombre,'id':i+1}});
    setTransportes(nombres);
    })
    },[])
   const handleNom = (e) => {
        setFormData({...formData, nombre: e.target.value});       
   }
    const handlDif = (e) => {
          setFormData({...formData, dificultad: e.target.value});
          
     }
    const handleParada = (e) => {
        setFormData({...formData, paradaTerminal: e.target.value});
        
    }
    const handleTransporte = (e) => {
        console.log(e.target.value);
        setFormData({...formData, transporte: e.target.value});
       
    }
    const handleCrearPista = () => {
        agregarPista(formData, user.token);
        saveData();
    }
    
   return <>
   
    <TextField label={'Nombre de pista'} onChange={handleNom} onClick={()=>saveData(formData)}/>
    <RadioGroup defaultValue={"Muy Facil"} onChange={handlDif}  onClick={()=>saveData(formData)}>
    <FormControlLabel value={"Muy Facil"} control={<Radio/>} label="Muy Facil"/>
    <FormControlLabel
        value="Facil"
        control={<Radio />}
        label="Facil"/>
    <FormControlLabel value={"Intermedio"} control={<Radio/>} label="Intermedio"/>
    <FormControlLabel value={"Dificil"} control={<Radio/>} label="Dificil"/>    
    </RadioGroup> 
    <FormControl>
        <InputLabel>Parada Terminal</InputLabel>
        <Select value={formData.paradaTerminal} onChange={handleParada}>
            {paradasTerminales.map((parada) => (
                <MenuItem value={parada.nombre} key={parada.id}>{parada.nombre}</MenuItem>
            ))}
        </Select>
    </FormControl>
    <FormControl>
        <InputLabel>Transporte</InputLabel>
        <Select value={formData.transporte} onChange={handleTransporte}>
            {transportes.map((transporte) => (
                <MenuItem value={transporte.nombre} key={transporte.id}>{transporte.nombre}</MenuItem>
            ))}
        </Select>
    </FormControl>
    <br />
    <Button onClick={handleCrearPista}><CheckIcon/></Button>
    </>
}