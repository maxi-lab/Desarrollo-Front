import { Box, Button, Modal, TextField } from "@mui/material"
import { useState } from "react"
import { crearAsistencia } from "../../Helpers/asistenciaEndPoint"

export default function AgregarModal({leg,token}){

    const [open,setOpen]=useState(false)
    const [dni,setDni]=useState('')
    const [pista,setPista]=useState('')
    const abrir=()=>setOpen(true)
    const cerrar=()=>setOpen(false)
    const handleAgregar=()=>{
        const a={dni:dni,legajo:leg,nomPista:pista}
        crearAsistencia(a,token)
        cerrar()

    }
    return <>
    <Button onClick={abrir}>Agregar </Button>
    <Modal open={open} onClose={cerrar}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
            <h1>Agregar asist</h1>
            <TextField label={'DNI'} onChange={(e)=>setDni(e.target.value)}/>
            <TextField label={'Pista'} onChange={(e)=>setPista(e.target.value)}/>
            <Button onClick={handleAgregar}>Agregar</Button>
        </Box>
    </Modal>
    </>
}