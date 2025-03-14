import React, {useEffect, useState} from "react";
import Weather from "../../Components/Weather/Weather";
import './Info.css';
import { Heading } from '../../Components/Heading/Headiing';
import { TrackGrid } from "../../Components/TrackGrid/TrackGrid";
import { Button, ButtonGroup } from "@mui/material";
import TransporteGrid from "../../Components/TransportGrid/TransporteGrid";
import PuntosGrid from "../../Components/PuntosGrid/PuntosGrid";
import ParadasGrid from "../../Components/ParadasGrid/ParadasGrid";
import CircularProgress from '@mui/material/CircularProgress';
import { API_URL_BACKEND } from "../../data/API/env";
function Info(){
    const [activeSection, setActiveSection] = useState('Pistas');
    const [data,steData]=useState([]);
    const [loading,setLoading]=useState(true)

    const sectionMap=new Map()
    sectionMap.set('Pistas',{tabla:<TrackGrid pistas={data}/>,endpoint:'Pista'})
    sectionMap.set('Condiciones Climaticas',{tabla:<Weather/>,endpoint:''})
    sectionMap.set('Transportes',{tabla:<TransporteGrid tranportes={data}/>,endpoint:'Transporte'})
    sectionMap.set('Puntos de interes',{tabla:<PuntosGrid puntos={data}/>,endpoint:'PuntoInteres'})
    sectionMap.set('Paradas',{tabla:<ParadasGrid paradas={data}/>,endpoint:'Paradas'})
useEffect(()=>{
    
    if(activeSection==='Condiciones Climaticas'){
        return 
    }
    setLoading(true)
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch(`${API_URL_BACKEND}${sectionMap.get(activeSection).endpoint}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              const data=result.map((p,i)=>{return {...p,id:i+1}})
              steData(data)
              setLoading(false)
            })
            .catch((error) => console.error(error));
    },[activeSection])    
    const renderSection = () =>sectionMap.get(activeSection).tabla
    return(
    <div>
       <Heading/>
       <ButtonGroup>
            <Button onClick={() => setActiveSection ('Pistas')}>
                Pistas
            </Button>,
            <Button onClick={() => setActiveSection ('Condiciones Climaticas')}>
                Clima
            </Button>
            <Button onClick={()=> setActiveSection('Transportes')}>
                Transportes
            </Button>
            <Button onClick={()=>setActiveSection('Paradas')}>
                Paradas
            </Button>
            <Button onClick={()=>setActiveSection('Puntos de interes')}>
                Puntos de interes
            </Button>
        </ButtonGroup>
        <h1 className="subtitle">{activeSection}</h1>
            {loading?<div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',}}><CircularProgress /></div>:renderSection()}
    </div>
    )
}
export default Info;