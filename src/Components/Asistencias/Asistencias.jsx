import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/UserContext";
import { TableBody, TableCell, TableHead, TableRow,Box,Table, Button } from "@mui/material";
import AgregarModal from "./AgregarModal";


export default function Asistencias(){
    const [asistencias,setAsistencias]=useState([])
    const [legajo,setLegajo]=useState(0)
    const {user}=useContext(UserContext)
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/Asistencia", requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result)
                let d=result.filter(r=>r.rescatista.userName===user.userName)
                d=d.map((a,i)=>{return {...a,id:i+1}})
                setLegajo(d[0].rescatista.legajo)
                setAsistencias(d)
            })
            .catch((error) => console.error(error));
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