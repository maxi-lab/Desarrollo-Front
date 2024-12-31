import { Button } from "@mui/material";
import { GridAddIcon } from "@mui/x-data-grid";
import { useState } from "react";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import PistaForm from "./PistaForm";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TransporteForm from "./TransporteForm";
import PuntoInteresForm from "./PuntoInteresForm";
import ParadasForm from "./ParadasForm";
import TuristasForm from "./TuristasForm";
import RescatistaForm from "./RescatistaForm";
export default function AddModal({entidad}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const entidadMap = new Map();
    entidadMap.set('Pista',{form:<PistaForm/>,nombre:'Pista'});
    entidadMap.set('Transporte',{form:<TransporteForm/>,nombre:'Transporte'});
    entidadMap.set('PuntoInteres',{form:<PuntoInteresForm/>,nombre:'Punto de interes'});
    entidadMap.set('Paradas',{form:<ParadasForm/>,nombre:'Parada'});
    entidadMap.set('Turista/Turistas',{form:<TuristasForm/>,nombre:'Turista'});
    entidadMap.set('Rescatista/Rescatistas',{form:<RescatistaForm/>,nombre:'Rescatista'});
   
   return <>
        <Button onClick={handleOpen}><GridAddIcon/></Button> 
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                <h2 id="simple-modal-title">Agregar {entidadMap.get(entidad).nombre}</h2>
                
                {/* seleccionar el form segun la entidad */}
                {entidadMap.get(entidad).form}
                <br />
            <Button onClick={()=>handleClose()}><CheckIcon/></Button>
            <Button onClick={()=>handleClose()}><CloseIcon/></Button>
            </Box>
        </Modal>

    </>
}