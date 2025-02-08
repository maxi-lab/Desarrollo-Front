import { Alert, Box, Button,TextField, CircularProgress } from "@mui/material"
import { useState } from "react"
import { agregarUser, logIn } from "../../Helpers/usersEndPoint";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Turista from "./Turista";
import './styles.css'
export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [verify,setVerify]=useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkPass=()=>{
        const regex=/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/

        if(password!==verify){
            setError('Las contraseñas no coinciden')
            return false
        }
        if(password.length<8){
            setError('La contraseña debe tener al menos 8 caracteres')
            return false
        }
        if(!regex.test(password)){
            setError('La contraseña debe tener al menos una letra mayuscula y un numero')
            return false
        }
        return true
    }
    const handleSignUp=async()=>{
        setLoading(true)
        if(userName==='' || password==='' || email===''){
            setError('Por favor complete todos los campos')
            setLoading(false)
            return
        }else if (!checkPass()){
            setLoading(false)
            return
        }
        setError(null)
        let user = {'name':userName, 'password':password, 'email':email,'rol':'Turista'};
        await agregarUser(user)
        let u=await logIn({username:user.name,password:user.password})
        //setUser(u)
        setError('Al turista')

    }
    if(error=='Al turista'){
        return <Turista usrName={userName}/>
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
            {loading?<CircularProgress/>:<Button onClick={handleSignUp} variant="contained" >Siguernte <ArrowForwardIcon/> </Button>}
        </Box>
    </div>
}