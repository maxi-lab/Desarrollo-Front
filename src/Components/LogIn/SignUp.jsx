import { Alert, Box, Button,TextField } from "@mui/material"
import { useState, useContext } from "react"
import { UserContext } from "../../Context/UserContext";
import { agregarUser } from "../../Helpers/usersEndPoint";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Turista from "./Turista";
import './styles.css'
export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [verify,setVerify]=useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const {setUser} = useContext(UserContext);

    const handleSignUp=()=>{
        if(userName==='' || password==='' || email===''){
            setError('Por favor complete todos los campos')
            return
        }else if (password!==verify) {
            setError('Las contraseñas no coinciden')
            return
        } 
        setError(null)
        const user = {'name':userName, 'password':password, 'email':email,'rol':'Turista'};
        agregarUser(user)
        setUser(user)
        setError('Al turista')
    }
    if(error==='Al turista'){
        return <Turista/>
    }
    //ojo que cuando lanzo la alerta, el boton se sale del area del form
    return <div className="form">
        <h2>Registrarse</h2>
        {error && <Alert variant="outlined" severity="error">{error}</Alert>}
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField variant="outlined" label="Nombre de usuario" onChange={(e)=>setUserName(e.target.value)}/>
            <TextField  variant="outlined" label="Contraseña" type="password" onChange={(e)=>setPassword(e.target.value)} />{/* verify psw */}
            <TextField  variant="outlined" label="Verificar contraseña" type="password" onChange={(e)=>setVerify(e.target.value)} />
            <TextField  variant="outlined" label="Correo electronico" type="email" onChange={(e)=>setEmail(e.target.value)} />
            <Button onClick={handleSignUp} variant="contained" type="submit">Siguernte <ArrowForwardIcon/> </Button>
        </Box>
    
    </div>
}