import { Button, Modal, Typography, FormControl,InputLabel,MenuItem,Select } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { crearSolicitud } from "../../Helpers/solicitudEndPoint";
import { API_URL_BACKEND } from "../../data/API/env";
export default function SolicitudRescate(){
    const [open,setOpen]=useState(false)
    const [pista,setPista]=useState('')
    const [pistas,setPistas]=useState([])

    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
                      
          fetch(`${API_URL_BACKEND}Pista`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
    
              const r=result.map((p,i)=>{return {'nombre':p.nombre,'id':i+1}})
              setPistas(r)
                
            })
            .catch((error) => console.error(error));
        
    },[])
    const abrir=()=>setOpen(true)
    const cerrar=()=>setOpen(false)
    const solicitar=()=>{
        crearSolicitud(pista)
        alert(`Ayuda en camino a la pista ${pista}`)
        cerrar()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return <>
    <Button onClick={abrir} size="mediun" color="error" variant="contained">S.O.S</Button>
    <Modal
    open={open}
    onClose={cerrar}
    >
        <Box sx={style}>
            <Typography>Introduzca la pista (simulamos que tenemos su ubicacion)</Typography>
            <FormControl>
                <InputLabel>Pista</InputLabel>
                <Select value={pista} onChange={(e)=>setPista(e.target.value)}>
                  {pistas.map((p)=>(<MenuItem value={p.nombre} key={p.id}>{p.nombre}</MenuItem>))}
                </Select>
            </FormControl>
        <Button onClick={solicitar}>S.O.S</Button>
        </Box>
    </Modal>    
    </>
}