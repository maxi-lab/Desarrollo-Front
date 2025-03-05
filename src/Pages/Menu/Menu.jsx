import React from 'react';
import Mapa from '../../assets/Mapa.jpeg';
import { useState } from 'react';
import './Menu.css';
import { Button, Container, Modal } from '@mui/material';
import { Heading } from '../../Components/Heading/Headiing';
import Grid from '@mui/material/Grid2';
import SolicitudRescate from '../../Components/Heading/SolicitudRescate';

function Menu() {
    const [open,setOpen]=useState(false)
    const abrir=()=>setOpen(true)
    const cerrar=()=>setOpen(false)

    return(
    <Grid container  >
        <Grid  size={12} >
            <Heading/>
        </Grid>
        <Grid item size={8} xs={12}> 
            <Grid item size={12} xs={12}>
            <Button sx={{fontSize: '20px', padding: '10px 20px'}} onClick={abrir} >Abrir mapa </Button>
            </Grid>
            {/* hay que poner los dos botones mapa y SOS grandes */ }
            <SolicitudRescate />
        </Grid>
        <Grid item size={4} xs={12}>
            <Modal open={open} onClose={cerrar}>
             <img src={Mapa} alt="Mapa" className="Mapa"/>
            </Modal>
        </Grid>
    </Grid>
            
           
       
);}

export default Menu