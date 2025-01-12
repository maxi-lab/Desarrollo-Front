import { Box, Button, TextField } from "@mui/material";
export default function ChangePassForm(){

    return <>
    <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
            <TextField label="Contraseña" type="password" variant="outlined" onChange={(e)=>console.log(e)} />
            <TextField label="Contraseña nueva" variant="outlined"  type="password" onChange={(e)=>console.log(e)} />
            <Button onClick={console.log('e')} variant="contained">Restablecer</Button>
    </Box>
    
    </>
}