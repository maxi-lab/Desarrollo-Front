import { Button } from "@mui/material";
import { GridAddIcon } from "@mui/x-data-grid";
import { act, useContext, useState } from "react";
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
import UserForm from './UserForm'
import { agregarPista } from "../../Helpers/pistasEndPont";
import { agregarParada } from "../../Helpers/paradasEndPoint";
import {agregarPunto} from "../../Helpers/puntosEndPoint";
import { agregarTurista } from "../../Helpers/turistasEndPont";
import { agregarTransporte } from "../../Helpers/transporteEndPoint";
import { agregarRescatista } from "../../Helpers/rescatistaEndPoint";
import { agregarUser } from "../../Helpers/usersEndPoint";
import { UserContext } from "../../Context/UserContext";

export default function AddModal({entidad}) {
    const {user}=useContext(UserContext)
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const formToModal=(formData)=>{
        setData(formData);
    }

    const saveData=async ()=>{
        entidadMap.get(entidad).action(data,user.token);
        handleClose();
    }
    const entidadMap = new Map();
    entidadMap.set('Pista',{form:<PistaForm saveData={formToModal}/>,nombre:'Pista',action:agregarPista});
    entidadMap.set('Transporte',{form:<TransporteForm saveData={formToModal}/>,nombre:'Transporte',action:agregarTransporte});
    entidadMap.set('PuntoInteres',{form:<PuntoInteresForm saveData={formToModal}/>,nombre:'Punto de interes',action:agregarPunto});
    entidadMap.set('Paradas',{form:<ParadasForm saveData={formToModal}/>,nombre:'Parada',action:agregarParada});
    entidadMap.set('Turista/Turistas',{form:<TuristasForm saveData={formToModal}/>,nombre:'Turista',action:agregarTurista});
    entidadMap.set('Rescatista/Rescatistas',{form:<RescatistaForm saveData={formToModal}/>,nombre:'Rescatista',action:agregarRescatista});
    entidadMap.set('User/GetUsers',{form:<UserForm saveData={formToModal}/>,nombre:'Usuario',action:agregarUser});
   
   return <>
        <Button onClick={handleOpen}><GridAddIcon/></Button> 
        <Modal
            open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                <h2 id="simple-modal-title">Agregar {entidadMap.get(entidad).nombre}</h2>
                {entidadMap.get(entidad).form}
                <br />
                <Button onClick={()=>saveData()}><CheckIcon/></Button>
                <Button onClick={()=>handleClose()}><CloseIcon/></Button>
            </Box>
        </Modal>

    </>
}