import { useState,useContext } from "react";
import { Button, TextField } from "@mui/material";
import './styles.css';
import { logIn } from "../../Helpers/usersEndPoint";
import { UserContext } from "../../Context/UserContext";

export default function LogInForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleLogIn=()=>{
        const user = {'username':userName, 'password':password};
        logIn(user).then((response)=>{
            
            setUser(response);
        }
        )    
    }
    return <div className="form">
        <h2>Iniciar seccion</h2>
        <form >
            <TextField placeholder="Nombre de usuario" onChange={(e)=>setUserName(e.target.value)} />
            <TextField  placeholder="Contraseña" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <Button onClick={handleLogIn}>Iniciar seccion</Button>
        </form>
    
    </div>
}