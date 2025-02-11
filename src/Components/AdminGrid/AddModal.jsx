import { Button } from "@mui/material";
import { GridAddIcon } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import PistaForm from "./PistaForm";
import CloseIcon from '@mui/icons-material/Close';
import TransporteForm from "./TransporteForm";
import PuntoInteresForm from "./PuntoInteresForm";
import ParadasForm from "./ParadasForm";
import TuristasForm from "./TuristasForm";
import RescatistaForm from "./RescatistaForm";
import { UserForm } from "./UserForm";
import { UserContext } from "../../Context/UserContext";
export default function AddModal({entidad,add}) {
    const {user} = useContext(UserContext);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const saveData=()=>{
        add()
        handleClose();
    }
    const entidadMap = new Map();
    entidadMap.set('Pista',{form:<PistaForm saveData={saveData}/>,nombre:'Pista'});
    entidadMap.set('Transporte',{form:<TransporteForm saveData={saveData}/>,nombre:'Transporte'});
    entidadMap.set('PuntoInteres',{form:<PuntoInteresForm saveData={saveData}/>,nombre:'Punto de interes'});
    entidadMap.set('Paradas',{form:<ParadasForm saveData={saveData}/>,nombre:'Parada'});
    entidadMap.set('Turista/Turistas',{form:<TuristasForm saveData={saveData}/>,nombre:'Turista'});
    entidadMap.set('Rescatista/Rescatistas',{form:<RescatistaForm saveData={saveData}/>,nombre:'Rescatista'});
    entidadMap.set('User/GetUsers',{form:<UserForm saveData={saveData}/>,nombre:'Usuario'});
 
   return <>
        <Button onClick={handleOpen}><GridAddIcon/></Button> 
        <Modal
            open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                <h2 id="simple-modal-title">Agregar {entidadMap.get(entidad).nombre}</h2>
                {entidadMap.get(entidad).form}
                
                <Button onClick={()=>handleClose()}><CloseIcon/></Button>
            </Box>
        </Modal>

    </>
}