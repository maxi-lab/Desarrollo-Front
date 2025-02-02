import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext";
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";
import AgregarModal from "./AgregarModal";
import { API_URL_BACKEND } from "../../data/API/env";

export default function Asistencias(){
    const [asistencias,setAsistencias]=useState([])
    const [legajo,setLegajo]=useState(0)
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
                setLegajo(result.nroIdentificador)
            })
            .catch((error) => console.error(error));
            fetch(`${API_URL_BACKEND}Asistencia`, requestOptions).then((response) => response.json())
            .then((result) => {
                let d=result.filter(r=>r.rescatista.legajo===legajo)
                d=d.map((r,i)=>{return {...r,id:i+1}}) 
                console.log(d)   
                setAsistencias(d) 
            }).catch((error) => console.error(error));
    },[])

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
                        <TableCell><Button>Ambulancia</Button></TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <AgregarModal leg={legajo}/>
        </Box>
    </>
}