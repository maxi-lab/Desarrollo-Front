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
import { r } from '../../data/Resenias/dataSimu';
export default function ReseniaPage(){
   const {nomResto}=useParams()
   const [resenias,setResenias]=useState([]);
   
   useEffect(()=>{
    const data=r.filter(re=>re.nomResto===nomResto)//simula la conexion a la API de reseñas
    
    setResenias(data)
    
   },[])
   const [rating,setRating]=useState(null)
   const [cuerpo,setCuerpo]=useState("")
   const handlePublish=()=>{
    const res={nomResto:nomResto,resenia:cuerpo,nota:rating}
    setResenias((prev)=>[...prev,res])
    setCuerpo("")
    setRating(null)
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
          <ListItem alignItems="flex-start">
        
        <ListItemText
          primary=""
          secondary={<>
              {r.resenia}
              </>
            }
        />
        <Rating value={r.nota} readOnly/>
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
        name="simple-uncontrolled"
        onChange={(e)=>setRating(e.target._wrapperState.initialValue)}
        defaultValue={rating}       
      />
    <Button onClick={handlePublish} >Publicar</Button>
    </Box>
    </>
}