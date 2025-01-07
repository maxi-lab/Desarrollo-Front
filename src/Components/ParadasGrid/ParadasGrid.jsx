import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ParadasGrid({paradas}) {
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
              <TableCell>Parada</TableCell>
              <TableCell>Altura</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paradas.map((t)=>
                <TableRow key={t.id}>
                    <TableCell>{t.nombre}</TableCell>
                    <TableCell>{t.altura}</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
    </>
}