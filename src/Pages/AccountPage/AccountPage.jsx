import { useContext } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import { UserContext } from "../../Context/UserContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, CircularProgress } from "@mui/material";

export default function AccountPage(){
    const {user}=useContext(UserContext)
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
        <h1>Cuenta</h1>
        <List sx={style}>
      <ListItem>
        <ListItemText primary={`Nombre de usuario: ${user.userName}`} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary={`Correo electronico: ${user.email}`} />
      </ListItem>
      
        </List>
        <Button>Restablecer contraseña</Button>
    </>
}