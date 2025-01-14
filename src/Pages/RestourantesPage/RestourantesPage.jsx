import { useEffect, useState } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import RestoList from "../../Components/RestoList/RestoList";
import { Box, Typography } from "@mui/material";
const Restorantes=[{id:1,nombre:"ifeiw",calificacion:5},{id:2,nombre:"ifede",calificacion:4},{id:3,nombre:"de",calificacion:3}]

export default function RestorantesPage(){
    const [restorantes,setRestorantes]=useState([])
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/PuntoInteres", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let data=result.filter(r=>r.nombreTipo==="Restorante")
                data=data.map((d,i)=>{return{...d,id:i+1,calificacion:0}})
                console.log(data)
                setRestorantes(data)
            })
            .catch((error) => console.error(error));
    },[])
    return <>
    <Heading/>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey',width: 500,
          maxHeight: 550 ,
          display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        bgcolor:'skyblue',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius:3,
        flexDirection: 'column',}}>
        <div>
        <Typography variant="h4" component='h1'>Restorantes</Typography>
        <RestoList restos={restorantes}/>
        </div>
    </Box>
    
    </>
}