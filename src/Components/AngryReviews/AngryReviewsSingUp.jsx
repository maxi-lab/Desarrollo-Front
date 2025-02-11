import { useContext, useState } from "react";
import { registrarse } from "../../Helpers/AngryReviews/auth";
import { Box, Button, TextField } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { deleteCookie } from "../../Helpers/Cookies/cookies";

export default function AngryReviewsSingUp(){

    const {user}=useContext(UserContext)
    const [userName,setUserName]=useState(user.userName)
    const [email,setEmail]=useState(user.email)
    const [password,setPassword]=useState("")
    const [verify,setVerify]=useState("")

    const handleRegisterAngry=()=>{
        deleteCookie('tokenAngryReviews')
        registrarse(email,userName,password,verify).then((r)=>{
             document.cookie=`tokenAngryReviews=${r}`
             setUserName('')
             setEmail('')
             setPassword('')
             setVerify('')
        })
    }
    return <>
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField value={userName} label="Nombre de usuario" onChange={(e)=>setUserName(e.target.value)}/>
            <TextField value={email} label="Mail" onChange={(e)=>setEmail(e.target.value)}/>
            <TextField value={password} label="Contraseña" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <TextField value={verify} label="Confirmar Contraseña" type="password" onChange={(e)=>setVerify (e.target.value)}/>
            <Button onClick={handleRegisterAngry}>Registrarse</Button>

        </Box>
    </>
}