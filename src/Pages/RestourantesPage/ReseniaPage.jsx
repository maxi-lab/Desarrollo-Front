import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom"
import { Heading } from "../../Components/Heading/Headiing"
import Rating from '@mui/material/Rating';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import AngryReviewsSingUp from '../../Components/AngryReviews/AngryReviewsSingUp';
import AngryReviewsLogIn from '../../Components/AngryReviews/AngryReviewsLogIn';
import { obtenerPosts,obtenerReviews,crearReseña, getAuthor} from '../../Helpers/AngryReviews/reviews';
import { getCookie } from '../../Helpers/Cookies/cookies';
export default function ReseniaPage(){
   const {nomResto}=useParams()
   const [resenias,setResenias]=useState([]);
   const [id,setId]=useState(0)
   const c=getCookie('tokenReview')
   const u=getCookie('tokenAngryReviews')
   useEffect(()=>{
    obtenerPosts().then(r=>{
      const resto=r.find(r=>r.title===nomResto)
      setId(resto.id)
      return resto.id
    })
    .then((r)=>{
      obtenerReviews(r).then(async(r)=>{
        const re=await Promise.all(r.map(async (r)=>{
          let a= await getAuthor(c,r.owner)
         
          return {...r,'autor':a}
        }))
        setResenias(re)
      })
    })
    
   },[resenias])
   const [rating,setRating]=useState(0)
   const [cuerpo,setCuerpo]=useState("")
   const handlePublish=()=>{
    
    crearReseña(u,cuerpo,rating,id)
    .then(r=>{
      setResenias((prev)=>[...prev,r])
    }).catch(e=>console.error(e))
    
    setCuerpo("")
    setRating(0)
   }
   return<>
   <Heading/>
   <Box sx={{ p: 2, border: '1px dashed grey',width: 500,display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100,
        margin: 'auto',
        bgcolor:'skyblue',
        position: 'relative',
        borderRadius:3,
        flexDirection: 'column',}}>
    
    <h1>{nomResto}</h1>
    <List sx={{ width: '100%', maxWidth: 360,  }}>
      {resenias.map((r)=>{

        return <>
          <ListItem alignItems="flex-start" key={r.id}>
        
        <ListItemText
          primary={<>{r.autor}</>}
          secondary={<>
              {r.comment}
              </>
            }
        />
        <Rating value={r.rating} readOnly/>
        </ListItem>
        <Divider variant="inset" component="li" />
        
      </>
      })}
    </List>
    <TextField
          id="outlined-multiline-static"
          label="Reseña"
          multiline
          value={cuerpo}
          rows={4}
          onChange={(e)=>{setCuerpo(e.target.value)}}
        />
    <Rating
        name="simple-controlled "
        onChange={(e,newValue)=>setRating(newValue)}
        value={rating}       
      />
    <Button onClick={handlePublish}>Publicar</Button>
    </Box>
      <AngryReviewsLogIn/>
      <AngryReviewsSingUp/>
    </>
}