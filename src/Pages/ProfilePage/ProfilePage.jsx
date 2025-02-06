import { useContext, useEffect, useState } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import { UserContext } from "../../Context/UserContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { CircularProgress } from "@mui/material";
import { API_URL_BACKEND } from "../../data/API/env";

export default function ProfilePage (){
    const [profile,setProfile]=useState(null)
    const {user}=useContext(UserContext)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${user.token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };
          
          fetch(`${API_URL_BACKEND}User/GetProfile?userName=${user.userName}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {setProfile(result)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setError("No hay un perfil asociado a tu usuario")
            });
    },[])
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };
      if (isLoading){
        return <>
        <Heading/>
          <div style={{display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',}}>
                <CircularProgress />
              </div>
        </>
      }
      if (profile.nombre==null) {
        return <>
          <Heading/>
          <h1>Perfil no encontrado </h1>
        </>
      }
      
      //tengo que corregir la API
    return<>
        <Heading/>
        <div>
            <h1>Tu Perfil</h1>
    <List sx={style}>
      <ListItem>
        <ListItemText primary={`Nombre: ${profile.nombre}`} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary={`Apellido: ${profile.apellido}`} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary={profile.rol==="Rescatista"?`Legajo: ${profile.nroIdentificador}`:`DNI: ${profile.nroIdentificador}`} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem><ListItemText primary={profile.rol!=="Rescatista"?`Telefono `:''}/></ListItem>
      </List>
      </div>
    
    </>
}