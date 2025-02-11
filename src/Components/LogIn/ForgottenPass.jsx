import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { reestablecerPass } from "../../Helpers/usersEndPoint";
import './styles.css'
import LockResetIcon from '@mui/icons-material/LockReset';
import Alert from '@mui/material/Alert';

export default function ForgottenPass() {
    //cambiar x dni o legajo
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const handleRest=()=>{
        if(username===""){
            setError('Nombre de usuario vacio')
            return
        }
        setError(null)
        reestablecerPass(username)
        setUsername('')
        setError("La contraseña cambiada a tu nombre de usuario. Cambiala en tu proximo inicio de sesion")
    }
    return <div className="form">
        <h2>Recuperar contraseña</h2>
        {error && <Alert severity="error" variant="outlined">{error}</Alert>}
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField variant="outlined" value={username} label="Nombre de usuario" onChange={(e)=>setUsername(e.target.value)} />
            <Button type="submit" onClick={handleRest} variant="contained">Recuperar <LockResetIcon/></Button>
        </Box>
    
    </div>
}