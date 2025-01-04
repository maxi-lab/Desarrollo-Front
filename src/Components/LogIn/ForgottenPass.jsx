import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { reestablecerPass } from "../../Helpers/usersEndPoint";
import './styles.css'
import LockResetIcon from '@mui/icons-material/LockReset';
export default function ForgottenPass() {
    //cambiar x dni o legajo
    const [username, setUsername] = useState('');
    const handleRest=()=>{
        reestablecerPass(username)
    }
    return <div className="form">
        <h2>Reestablecer contraseña</h2>
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField variant="outlined" label="Username" onChange={(e)=>setUsername(e.target.value)} />
            <Button type="submit" onClick={handleRest} variant="contained"><LockResetIcon/></Button>
        </Box>
    
    </div>
}