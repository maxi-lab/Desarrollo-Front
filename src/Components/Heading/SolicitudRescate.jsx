import { Button, Modal, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import { crearSolicitud } from "../../Helpers/solicitudEndPoint";

export default function SolicitudRescate(){
    const [open,setOpen]=useState(false)
    const [pista,setPista]=useState('')

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
        <TextField variant="outlined" label="Nombre de Pista" onChange={(e)=>setPista(e.target.value)}/>
        <Button onClick={solicitar}>S.O.S</Button>
        </Box>
    </Modal>    
    </>
}