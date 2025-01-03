import { Button,TextField } from "@mui/material"
import { useState } from "react"
import { agregarUser } from "../../Helpers/usersEndPoint";
import './styles.css'
export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignUp=()=>{
        const user = {'name':userName, 'password':password, 'email':email};
        agregarUser(user)
    }
    return <div className="form">
        <h2>Registrarse</h2>
        <form >
            <TextField placeholder="Nombre de usuario" onChange={(e)=>setUserName(e.target.value)}/>
            <TextField  placeholder="Contraseña" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <TextField  placeholder="Correo electronico" type="email" onChange={(e)=>setEmail(e.target.value)} />
            <Button onClick={handleSignUp} type="submit">Registrarse</Button>
        </form>
    
    </div>
}