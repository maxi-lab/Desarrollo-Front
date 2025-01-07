import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TransporteGrid() {
    const [tranportes,setTransporte]=useState([])
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/Transporte", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                const data=result.map((p,i)=>{return {...p,id:i+1}})
                setTransporte(data)
                console.log(tranportes)

            })
            .catch((error) => console.error(error));
    },[])

    return <>
    <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        mt: 20,
      }}>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transporte</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tranportes.map((t)=>
                <TableRow key={t.id}>
                    <TableCell>{t.nombre}</TableCell>
                    <TableCell>{t.nomTipo}</TableCell>
                    <TableCell>{t.abierta?"Abierta":"Cerrada"}</TableCell>
                    <TableCell>{t.cantidad}</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
}