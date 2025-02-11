import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext";
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";
import AgregarModal from "./AgregarModal";
import { API_URL_BACKEND } from "../../data/API/env";
import { ambulancia } from "../../Helpers/asistenciaEndPoint";

export default function Asistencias(){
    const [asistencias,setAsistencias]=useState([])
    const [legajo,setLegajo]=useState(0);
    const [flag,setFlag]=useState(false)
    const {user}=useContext(UserContext)

    const handleAmbulancia=(id)=>{
        const a=asistencias.find((a)=>a.id===id)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "nombre": `${a.turista.nombre} ${a.turista.apellido}`,
            "telefono": `${a.turista.telefono}`,
            "direccion": "Ruta 3, Km 26",
            "descripcion":  `Los Pinos`,  
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,

            redirect: "follow"
        };
        
        fetch("https://ambulanciaya.onrender.com/ambulancias/solicitar", requestOptions)
            .then((response) => response.text())
            .then((result) => {console.log(result)
                ambulancia(a.codigo,user.token)
            })
            .then((r)=>{
                const asist=asistencias.map(asi=>{
                    if (asi.codigo==a.codigo){
                        asi.ambulancia=true
                    }
                    return asi
                })
                setAsistencias(asist)
            })
            .catch((error) => console.error(error));
}
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };  
                fetch(`${API_URL_BACKEND}User/GetProfile?userName=${user.userName}`, requestOptions)
                    .then((response) => response.json())
                    .then((result) => {console.log(result)
                        setLegajo(result.nroIdentificador)
                    })
                    .catch((error) => console.error(error));  
    },[])
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };  
        fetch(`${API_URL_BACKEND}Rescatista?legajo=${legajo}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                const a=result.asistencias.map((r,i)=>{return {...r,id:i+1}})
                setAsistencias(a)

                
            }).catch((error) => console.error(error));
    },[legajo,flag])

    return<>
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Codigo</TableCell>
                        <TableCell>Pista</TableCell>
                        <TableCell>Turista</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {asistencias.map(a=><TableRow key={a.id}>
                        <TableCell>{a.codigo}</TableCell>
                        <TableCell>{a.pista.nombre}</TableCell>
                        <TableCell>{`${a.turista.apellido}, ${a.turista.nombre}`}</TableCell>
                        <TableCell>{!a.ambulancia?<Button onClick={()=>handleAmbulancia(a.id)}>Ambulancia</Button>:'Atendido por Ambulancias Ya'}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>

            <AgregarModal leg={legajo} add={()=>{setFlag((prev)=>!prev)}}/>

        </Box>
    </>
}