import { useContext, useState } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import { UserContext } from "../../Context/UserContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, Button, Typography } from "@mui/material";
import ChangePassForm from "../../Components/ChangePassForm/ChangePassForm";

export default function AccountPage(){
    const {user}=useContext(UserContext)
    const [chamge,setChamge]=useState(false)
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
    return <>
        <Heading/>
        <Box sx={{'& > :not(style)': { m: 1, width: '30ch' },alignItems:'center',display:'flex',flexDirection:'column'}}>
        <Typography variant="h5">Cuenta</Typography>
        <List sx={style}>
      <ListItem>
        <ListItemText primary={`Nombre de usuario: ${user.userName}`} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary={`Correo electronico: ${user.email}`} />
      </ListItem>
      
        </List>
        <Button onClick={()=>setChamge(true)}>Restablecer contraseña</Button>
        {chamge?<ChangePassForm/>:''}
        </Box>
        
    </>
}