import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { cambiarPass, logIn } from "../../Helpers/usersEndPoint";
export default function ChangePassForm(){
    const {user}=useContext(UserContext)
    const [pass,setPass]=useState('')
    const [newPass,setNewPass]=useState('')
    const verifyPass=()=>{
        const regex=/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/
        if(newPass.length<8){
            return false
        }
        if(!regex.test(newPass)){
            return false
        }
        return true
    }
    
    const handleCambiar=async()=>{
        const credentials={
            "username":user.userName,
            "password":pass,
        }
        try{
            await logIn(credentials)
            verifyPass()?await cambiarPass(user.userName,newPass,credentials.password,user.token):console.log('contraseña no valida')
            setPass('')
            setNewPass('')
        }catch{
            console.error("todo mal")
        }

    }

    return <>
    <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField label="Contraseña" type="password" variant="outlined" onChange={(e)=>setPass(e.target.value)} />
            <TextField label="Contraseña nueva" variant="outlined"  type="password" onChange={(e)=>setNewPass(e.target.value)} />
            <Button onClick={handleCambiar} variant="contained">Restablecer</Button>
    </Box>
    
    </>
}