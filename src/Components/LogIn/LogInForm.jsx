import { useState,useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import './styles.css';
import { logIn } from "../../Helpers/usersEndPoint";
import { UserContext } from "../../Context/UserContext";
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
export default function LogInForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const {setUser} = useContext(UserContext);
    const handleLogIn=()=>{
        if(userName === '' || password === '') {
           setError('Por favor complete todos los campos'); 
            return; 
        }
        setError(null);
        const user = {'username':userName, 'password':password};
        logIn(user).then((response)=>{
            setUser(response);
        }
        )   
    }
    return <div className="form">
        <h2>Iniciar seccion</h2>
        {error && <Alert severity="error" variant="outlined">{error}</Alert>}
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField label="Nombre de usuario" variant="outlined" onChange={(e)=>setUserName(e.target.value)} />
            <TextField label="Contraseña" variant="outlined"  type="password" onChange={(e)=>setPassword(e.target.value)} />
            <Button onClick={handleLogIn} variant="contained"><LoginIcon/></Button>
        </Box>
    
    </div>
}