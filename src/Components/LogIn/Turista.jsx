import { Box, Button,TextField } from "@mui/material"
import	Alert from '@mui/material/Alert';
import { UserContext } from "../../Context/UserContext";
import { useState,useContext } from "react"
import "./styles.css"
import { agregarTurista } from "../../Helpers/turistasEndPont";
import SaveIcon from '@mui/icons-material/Save';
export default function Turista() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [error, setError] = useState(null);
    const {user} = useContext(UserContext);
    const handleSave=()=>{
        if(nombre==='' || apellido==='' || dni===''){
            setError('Por favor complete todos los campos')
            return
        }
        setError(null)
        const turista = {'nombre':nombre, 'apellido':apellido, 'dni':dni,'nomUsr':user.name};
        agregarTurista(turista)
        
    }
    return<div className="form">
        <h2>Completa tu perfil</h2>
        {error && <Alert severity="error">{error}</Alert>}
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}x>
            <TextField variant="outlined" label="Nombre" onChange={(e)=>setNombre(e.target.value)} />
            <TextField variant="outlined" label="Apellido" onChange={(e)=>setApellido(e.target.value)}/>
            <TextField variant="outlined" label="DNI" type="number" onChange={(e)=>setDni(e.target.value)} />{/* ojo que el type number no permite el uso de puntos  */}
            <Button onClick={handleSave}><SaveIcon/></Button>
        </Box>
    </div>
}