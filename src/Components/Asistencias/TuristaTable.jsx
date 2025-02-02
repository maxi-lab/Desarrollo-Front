import { useContext, useEffect } from "react"
import { useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";
import { API_URL_BACKEND } from "../../data/API/env";

export default function TuristaTable (){
    const [asistencias,setAsistencias]=useState([])
    const {user}=useContext(UserContext)
    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };
          
          fetch(`${API_URL_BACKEND}Asistencia`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result)
                let d=result.filter(r=>r.turista.userName===user.userName)
                d=d.map((a,i)=>{return {...a,id:i+1}})
                setAsistencias(d)
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
                        <TableCell>Rescatista</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {asistencias.map(a=><TableRow key={a.id}>
                        <TableCell>{a.codigo}</TableCell>
                        <TableCell>{a.pista.nombre}</TableCell>
                        <TableCell>{`${a.rescatista.apellido}, ${a.rescatista.nombre}`}</TableCell>
                        
                    </TableRow>)}
                </TableBody>
            </Table>
        </Box>
    </>
}