import React, { useEffect, useState } from 'react';
import {AdminGrid} from '../../Components/AdminGrid/AdminGrid';
import { Heading } from '../../Components/Heading/Headiing';
import './adminpage.css';
import { Button, ButtonGroup, MenuItem, Select } from '@mui/material';
import { eliminarPista } from './Helpers/pistasEndPont';
function AdminPage() {
  const eliminar=async(id)=>{
    /* console.log(datos)
    datos.map(i=>console.log(i.id)) */
    const pista=datos.find(d=>d.id==id)
    console.log(pista)
    await eliminarPista(pista)
    setDatos((prev)=>prev.filter(d=>d.id!==id))
  }
  const pistas = [
    { field: 'nombre', headerName: 'Pista', width: 90 },
    {
      field: 'dificultad',
      headerName: 'Dificultad',
      width: 150,
      editable: true,
    },
    {
      field: 'abierta',
      headerName: 'Estado',
      width: 150,
      editable: true,
    },
    {
      field: 'minimo',
      headerName: 'Minimo necesario',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field:'action',
      headerName:'',
      width: 200,
      renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminar(params.id)}>Eliminar</Button></div>),
    },
    {field:'act2',
      headerName:'',
      width:200,
      renderCell:(params)=>(<div><Button>Cerrar</Button></div>)
    }
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
  const [entidades,setEntidades]=useState(pistas)
 useEffect(()=>{
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://localhost:7268/api/Pista", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const data= result.map((i,index)=>{
        i.abierta?i.abierta="Abierta":i.abierta="Cerrada"
        return {...i,id:index+1}})
      setDatos(data)
    })
    .catch((error) => console.error(error))//atrapa el error
   
},[])
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