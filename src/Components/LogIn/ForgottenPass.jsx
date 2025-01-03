import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { reestablecerPass } from "../../Helpers/usersEndPoint";
import './styles.css'
export default function ForgottenPass() {
    //cambiar x dni o legajo
    const [username, setUsername] = useState('');
    const handleRest=()=>{
        reestablecerPass(username)
    }
    return <div className="form">
        <h2>Reestablecer contraseña</h2>
        <form >
            <TextField placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
            <Button type="submit">Restaurar</Button>
        </form>
    
    </div>
}