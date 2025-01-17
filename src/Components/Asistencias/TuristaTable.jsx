import { useContext, useEffect } from "react"
import { useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";

export default function TuristaTable (){
    const [asistencias,setAsistencias]=useState([])
    const {user}=useContext(UserContext)
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/Asistencia", requestOptions)
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