import React, { useEffect, useState } from 'react';
import {AdminGrid} from '../../Components/AdminGrid/AdminGrid';
import { Heading } from '../../Components/Heading/Headiing';
import './adminpage.css';
import { Button, ButtonGroup, MenuItem, Modal, Select } from '@mui/material';
import { eliminarPista, alternarEstado } from './Helpers/pistasEndPont';
import { eliminarTrasporte,alternarEstadoT } from './Helpers/transporteEndPoint';
import { eliminarParada } from './Helpers/paradasEndPoint';
import { eliminarPunto } from './Helpers/puntosEndPoint';
import { eliminarTurista } from './Helpers/turistasEndPont';
import { eliminarRescatista } from './Helpers/rescatistaEndPoint';
import AddModal from '../../Components/AdminGrid/AddModal';
let alternarP,eliminarP,alternarT,eliminarT,eliminarPa,eliminarPu,eliminarTu,eliminarRe,handleSelectChange;


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
  {field:'paradaTerminal',
    headerName:'Parada terminal',
    width: 200,
    editable: true,
  },
  {field:'transporte',
    headerName:'Transporte',
    width: 200,
    editable: true,
  },
  {
    field:'action',
    headerName:'',
    width: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarP(params)}>Eliminar</Button></div>),
  },
  {field:'act2',
    headerName:'',
    width:200,
    renderCell:(params)=>(<div><Button onClick={()=>alternarP(params)}>Cerrar/Abrir</Button></div>)
  }
];
const transportes = [
  { field: 'nombre', headerName: 'Transporte', width: 90 },
  {
    field: 'abierta',
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
    field:'nomTipo',
    headerName:'Tipo',
    width: 150,
    editable: true,
    type:'singleSelect',
    valueOptions:['Poma','Telesilla']
  },
  {
    field:'eliminar',
    headerName:'',
    with: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarT(params)}>Eliminar</Button></div>),
  },
  {
    field:'alternar',
    headerName:'',
    with: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>alternarT(params)}>Abrir/Cerrar</Button></div>),
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
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarPa(params)}>Eliminar</Button></div>),
  },
];
const puntosInteres=[
  { field: 'nombre', headerName: 'Nombre', width: 90 },
  {
    field: 'nombreTipo',
    headerName: 'Tipo',
    width: 250,
    heigt: 200, 
    editable: true,
    type:'singleSelect',
    valueOptions:['Restorante','Centro de Atencion','Rental','Centro Medico']
  },
  {
    field:'nombrePardada',
    headerName:'Parada',
    width: 200,
    editable: true
  },

  {
    field:'eliminar',
    headerName:'',
    with: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarPu(params)}>Eliminar</Button></div>),
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
    field: 'userName',
    headerName: 'Usuario',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    filed:'eliminar',
    headerName:'',
    with: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarTu(params)}>Eliminar</Button></div>),
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
    field: 'userName',
    headerName: 'Usuario',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    filed:'eliminar',
    headerName:'',
    with: 200,
    renderCell:(params)=>(<div><Button size='small' onClick={()=>eliminarRe(params)}>Eliminar</Button></div>),
  },
]
function AdminPage() {

  const [datos,setDatos]=useState([]);

  handleSelectChange=(e,p)=>{
    setDatos((prev)=>{
      prev.map((i)=>i.id==p.row.id?{...i,type:e.target.value}:i)
    })
  }
  alternarP=async(p)=>{
   
    try {
      await alternarEstado(p.row.nombre);
      setDatos((prevDatos) =>
        prevDatos.map((item) =>
          item.id === p.id
            ? { ...item, abierta: item.abierta === "Abierta" ? "Cerrada" : "Abierta" }
            : item
        )
      );
    } catch (error) {
      console.error('Error toggling state:', error);
    }
  }
  eliminarP=async(p)=>{
    const id=p.id
    console.log(p.row.nombre)
    await eliminarPista(p.row.nombre)  
    setDatos((prev)=>prev.filter(d=>d.id!==id))
  }

  alternarT=async(p)=>{ 
    console.log(p)
    try {
      await alternarEstadoT(p.row.nombre);
      setDatos((prevDatos) =>
        prevDatos.map((item) =>
          item.id === p.id
            ? { ...item, abierta: item.abierta === "Abierta" ? "Cerrada" : "Abierta" }
            : item
          )
      );
    } catch (error) {
      console.error('Error toggling state:', error);
    }
  }
  eliminarT=async(p)=>{
    try {
    const id=p.id
    console.log(p.row.nombre)
    await eliminarTrasporte(p.row.nombre)  
    setDatos((prev)=>prev.filter(d=>d.id!==id))
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  eliminarPa=async(p)=>{
    try {
      await eliminarParada(p.row.nombre)
      setDatos((prev)=>prev.filter(d=>d.id!==p.id))

    } catch (error) {
      console.error('Error deleting:', error);
    }
  }
  eliminarPu=async(p)=>{
    try {
      await eliminarPunto(p.row.nombre)
      setDatos((prev)=>prev.filter(d=>d.id!==p.id))

    } catch (error) {
      console.error('Error deleting:', error);
    }
  }
  eliminarTu=async(p)=>{
    try {
      await eliminarTurista(p.row.dni)
      setDatos((prev)=>prev.filter(d=>d.id!==p.id))
    } catch (error) {
      console.error('Error deleting:', error);
      
    }
  }
  eliminarRe=async(p)=>{
    try {
      console.log(p.row.legajo)
      await eliminarRescatista(p.row.legajo)
      setDatos((prev)=>prev.filter(d=>d.id!==p.id))
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  const [entidades,setEntidades]=useState(pistas)

  const endpointMap= new Map();//mapea los nombres de las entidades con los nombres de los endpoints
  endpointMap.set(pistas,"Pista");
  endpointMap.set(transportes,"Transporte");
  endpointMap.set(paradas,"Paradas");
  endpointMap.set(puntosInteres,"PuntoInteres")
  endpointMap.set(turistas,"Turista/Turistas")
  endpointMap.set(rescatistas,"Rescatista/Rescatistas")
  useEffect(()=>{
    console.log(endpointMap.get(entidades));
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`https://localhost:7268/api/${endpointMap.get(entidades)}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data= result.map((i,index)=>{
          i.abierta?i.abierta="Abierta":i.abierta="Cerrada"
          return {...i,id:index+1}})
        setDatos(data)
      })
      .catch((error) => console.error(error))//atrapa el error
     
  },[entidades])
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
        <AdminGrid columns={entidades} rows={datos} key={entidades.map(e=>e.field).join('-')}/>
        <AddModal entidad={endpointMap.get(entidades)}/>
    </div>
    
  )
}

export default AdminPage