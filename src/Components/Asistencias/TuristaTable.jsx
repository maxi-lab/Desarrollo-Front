import { useContext, useEffect } from "react"
import { useState } from "react"
import { UserContext } from "../../Context/UserContext"
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";
import { API_URL_BACKEND } from "../../data/API/env";

export default function TuristaTable (){
    const [asistencias,setAsistencias]=useState([])
    const [dni,setDni]=useState(0)
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
          
          fetch(`${API_URL_BACKEND}User/GetProfile?userName=${user.userName}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result)
                
                setDni(result.nroIdentificador)
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
          
          fetch(`${API_URL_BACKEND}Turista?dni=${dni}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result)
                const asistencias=result.asistencias.map((a,i)=>{
                    return {...a,id:i+1}
                })
                setAsistencias(asistencias)
            })
            .catch((error) => console.error(error));
    },[dni])
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