import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { crearAsistencia } from "../../Helpers/asistenciaEndPoint"
import { UserContext } from "../../Context/UserContext"
import { API_URL_BACKEND } from "../../data/API/env"


export default function AgregarModal({leg,add}){


    const [open,setOpen]=useState(false)
    const {user}=useContext(UserContext)
    const [dni,setDni]=useState('')
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
    const handleAgregar=async()=>{
        const a={dni:dni,legajo:leg,nomPista:pista}

        await crearAsistencia(a,user.token)
        add()

        cerrar()
    }
    return <>
    <Button onClick={abrir}>Agregar </Button>
    <Modal open={open} onClose={cerrar}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
            <h1>Agregar asist</h1>
            <TextField label={'DNI'} onChange={(e)=>setDni(e.target.value)}/>
            <FormControl>
                <InputLabel>Pista</InputLabel>
                <Select value={pista} onChange={(e)=>setPista(e.target.value)}>
                  {pistas.map((p)=>(<MenuItem value={p.nombre} key={p.id}>{p.nombre}</MenuItem>))}
                </Select>
            </FormControl>
            <Button onClick={handleAgregar}>Agregar</Button>
        </Box>
    </Modal>
    </>
}