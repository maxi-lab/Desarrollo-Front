import { Box, Button,TextField, CircularProgress } from "@mui/material"
import	Alert from '@mui/material/Alert';
import { UserContext } from "../../Context/UserContext";
import { useState,useContext } from "react"
import "./styles.css"
import { agregarTurista } from "../../Helpers/turistasEndPont";
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from "react-router-dom";
export default function Turista({usrName}) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [tel,setTel]=useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const handleSave=()=>{
        setLoading(true)
        const regex = /[e+\-*/]/;
        if((nombre==='' || apellido==='' || dni==='')&&!regex.test(dni)&&!regex.test(tel)){
            setError('Por favor complete todos los campos con valores validos')
            setLoading(false)
            return
        }
        setError(null)
        const turista = {'nombre':nombre, 'apellido':apellido, 'dni':dni,'nomUsr':usrName,'tel':tel}; 
        agregarTurista(turista)
        navigate('/menu')
        
    }
    return<div className="form">
        <h2>Completa tu perfil</h2>
        {error && <Alert severity="error">{error}</Alert>}
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}x>
            <TextField variant="outlined" label="Nombre" onChange={(e)=>setNombre(e.target.value)} />
            <TextField variant="outlined" label="Apellido" onChange={(e)=>setApellido(e.target.value)}/>
            <TextField variant="outlined" label="DNI" type="number" onChange={(e)=>setDni(e.target.value)} />{/* ojo que el type number no permite el uso de puntos  */}
            <TextField variant="outlined" label="Telefono" type="number" onChange={(e)=>setTel(e.target.value)} />{/* ojo que el type number no permite el uso de puntos  */}
            
            {loading?<CircularProgress/>:<Button onClick={handleSave} variant="contained">Guardar <SaveIcon/></Button>}
        </Box>
    </div>
}