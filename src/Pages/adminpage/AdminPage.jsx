import React, { useEffect, useState } from 'react';
import {AdminGrid} from '../../Components/AdminGrid/AdminGrid';
import { Heading } from '../../Components/Heading/Headiing';
import './adminpage.css';
import { Button, ButtonGroup, filledInputClasses, MenuItem, Select } from '@mui/material';


const datoPista = [
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
  const eliminar=(id)=>{
    setDatos((prev)=>prev.filter(d=>d.id!==id))
  }
  const pistas = [
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
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ];
  const transportes = [
    { field: 'nombre', headerName: 'Transporte', width: 90 },
    {
      field: 'capacidad',
      headerName: 'Capacidad',
      width: 150,
      editable: true,
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      editable: true,
    },
    {
      field: 'cantidad',
      headerName: 'Cantidad',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field:'tipo',
      headerName:'Tipo',
      width: 150,
      editable: true,
      renderCell:(params)=>(<Select>
      <MenuItem value=""><em>ninguno</em></MenuItem>
      <MenuItem value="Option 1"><em>Telesilla</em></MenuItem>
      <MenuItem value="Option 2"><em>Poma</em></MenuItem>
      </Select>)
    },
    {
      filed:'eliminar',
      headerName:'',
      with: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ];
  const paradas=[
    { field: 'nombre', headerName: 'Parada', width: 90 },
    {
      field: 'altura',
      headerName: 'Altura',
      width: 150,
      editable: true,
    },
    {
      filed:'eliminar',
      headerName:'',
      with: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ];
  const puntosInteres=[
    { field: 'nombre', headerName: 'Nombre', width: 90 },
    {
      field: 'tipo',
      headerName: 'Tipo',
      width: 150,
      editable: true,
      renderCell:(params)=>(<Select>
        <MenuItem value=""><em>ninguno</em></MenuItem>
        <MenuItem value="Option 1"><em>Rental</em></MenuItem>
        <MenuItem value="Option 2"><em>Restorante</em></MenuItem>
        <MenuItem value="Option 2"><em>Centro de atencion</em></MenuItem>
        <MenuItem value="Option 2"><em>Centro medico</em></MenuItem>
        </Select>)
    },
    {
      filed:'eliminar',
      headerName:'',
      with: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ]
  const turistas=[
    { field: 'dni', headerName: 'DNI', width: 90 },
    {
      field: 'nombre',
      headerName: 'nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'apellido',
      headerName: 'apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'usuario',
      headerName: 'Usuario',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      filed:'eliminar',
      headerName:'',
      with: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ]
  const rescatistas=[
    { field: 'legajo', headerName: 'Legajo', width: 90 },
    {
      field: 'nombre',
      headerName: 'nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'apellido',
      headerName: 'apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'usuario',
      headerName: 'Usuario',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      filed:'eliminar',
      headerName:'',
      with: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
  ]
  const [datos,setDatos]=useState([])
  const [entidades,setEntidades]=useState([])
  useEffect(()=>{setEntidades(pistas)},[])
  useEffect(()=>{setDatos(datoPista)},[])
  return (
    <div>
        <Heading/>
        <ButtonGroup>
          <Button onClick={()=>setEntidades(pistas)}>Pistas</Button>
          <Button onClick={()=>setEntidades(transportes)}>Transportes</Button>
          <Button onClick={()=>setEntidades(paradas)}>Paradas</Button>
          <Button onClick={()=>setEntidades(puntosInteres)}>Puntos de Interes</Button>
          <Button onClick={()=>setEntidades(turistas)}>Turistas</Button>
          <Button onClick={()=>setEntidades(rescatistas)}>Rescatistas</Button>
        </ButtonGroup>
        <AdminGrid columns={entidades} rows={datos}/>
    </div>
  )
}

export default AdminPage