import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export default function RescatistaGrid(){
    const [solicitudes,setSolicitudes]=useState([])
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
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
                        <TableCell><Button>Acudir</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </Box>
    </>
}