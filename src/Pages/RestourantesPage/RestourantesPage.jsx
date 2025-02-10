import { useEffect, useState } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import RestoList from "../../Components/RestoList/RestoList";
import { Box, Typography } from "@mui/material";
import { API_URL_BACKEND } from "../../data/API/env";
import { obtenerPosts } from "../../Helpers/AngryReviews/reviews";
import { login } from "../../Helpers/AngryReviews/auth";
export default function RestorantesPage(){
    const [restorantes,setRestorantes]=useState([])
    useEffect(()=>{
        obtenerPosts().then((r)=>{
            console.log(r)
            const restos=r.map((r,i)=>{return{"nombre":r.title,"id":i+1,"calificacion":r.avg_ratings}})
            console.log(restos)
            setRestorantes(restos)
        })
        login('centro@mail.com','a').then(r=>{
           document.cookie=`tokenReview= ${r}` 
        })

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