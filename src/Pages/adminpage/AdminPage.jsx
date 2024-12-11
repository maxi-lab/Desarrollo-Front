import React from 'react'
import {AdminGrid} from '../../Components/AdminGrid/AdminGrid'
import { Heading } from '../../Components/Heading/Headiing'
import './adminpage.css';
import { Button, ButtonGroup } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'Pista', width: 90 },
  {
    field: 'firstName',
    headerName: 'Dificultad',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Estado',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Minimo necesario',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    filed:'eliminar',
    headerName:'',
    with: 200,
    renderCell:()=>(<div><Button size='small'>Eliminar</Button></div>),
  },
 
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function AdminPage() {
  return (
    <div>
        <Heading/>
        <ButtonGroup>
          <Button>Pistas</Button>
          <Button>Transportes</Button>
          <Button>Paradas</Button>
          <Button>Puntos de Interes</Button>
          <Button>Turistas</Button>
          <Button>Rescatistas</Button>
        </ButtonGroup>
        <AdminGrid columns={columns} rows={rows}/>
    </div>

  )
}

export default AdminPage