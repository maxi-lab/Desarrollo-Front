import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { atenderSolicitud } from "../../Helpers/solicitudEndPoint";
import { UserContext } from "../../Context/UserContext";

export default function Solicitudes(){
    const [solicitudes,setSolicitudes]=useState([])
    const {user}=useContext(UserContext)
    const handleAcudir=(id)=>{
        const s=solicitudes.find((s)=>s.id===id)
        console.log(s)
        atenderSolicitud(s.codigo)
        setSolicitudes((prev)=>prev.map((p)=>{
            if(p==s)
            {
                p.atendido=true
            }
            return p

        }))
    }
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        const requestOptions = {
            method: "GET",
            headers:myHeaders,
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/Solicitud", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const d=result.map((r,i)=>{return {...r,id:i+1}})
                setSolicitudes(d)
            })
            .catch((error) => console.error(error));
    },[])
    
    return <>
        <Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Codigo</TableCell>
                    <TableCell>Pista</TableCell>
                    <TableCell>Atendida</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {solicitudes.map((s)=>{
                    return <TableRow key={s.id}>
                        <TableCell>{s.codigo}</TableCell>
                        <TableCell>{s.pista}</TableCell>
                        <TableCell>{s.atendido?'SI':'NO'}</TableCell>
                        <TableCell>{!s.atendido?<Button onClick={()=>handleAcudir(s.id)}>Acudir</Button>:''}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </Box>
    </>
}