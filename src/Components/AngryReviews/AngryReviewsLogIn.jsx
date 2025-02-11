import { useState } from "react";
import { login } from "../../Helpers/AngryReviews/auth";
import { Box, Button, TextField  } from "@mui/material";
import { deleteCookie } from "../../Helpers/Cookies/cookies";
 export default function AngryReviewsLogIn(){
    const [usr_mail,setUsrMail]=useState('')
    const [password,setPassword]=useState('')
    const handleAuth=()=>{
    deleteCookie('tokenAngryReviews')
    login(usr_mail,password).then((r)=>{
        document.cookie=`tokenAngryReviews=${r} `
        setUsrMail('')
        setPassword('')
    })
    .catch(e=>console.error(e))
    }
    return<>
    <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
    <TextField value={usr_mail} label="Usuario o email" onChange={(e)=>setUsrMail(e.target.value)}/>
    <TextField value={password} label="Contraseña" type="password" onChange={(e)=>setPassword(e.target.value)}/>
    <Button onClick={handleAuth}>Autenticarse</Button>
    </Box>
    
    </>
} 