import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export function TrackGrid({pistas}) {

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        mt: 20,
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pista</TableCell>
              <TableCell>Dificultad</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Parada terminal</TableCell>
              <TableCell>Tramsporte</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pistas.map((p)=>{return <>
              <TableRow key={p.id}>
                <TableCell>{p.nombre}</TableCell> 
                <TableCell>{p.dificultad}</TableCell> 
                <TableCell>{p.abierta?'Abierta':"Cerrada"}</TableCell> 
                <TableCell>{p.paradaTerminal}</TableCell>
                <TableCell>{p.transporte}</TableCell>

              </TableRow>
              </>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  )
}


