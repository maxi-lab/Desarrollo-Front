import React, {useState} from "react";
import Weather from "../../Components/Weather/Weather";
import {useNavigate} from 'react-router-dom';
import './Info.css';
import { Heading } from '../../Components/Heading/Headiing';
import { TrackGrid } from "../../Components/TrackGrid/TrackGrid";
import { Button, ButtonGroup } from "@mui/material";
import TransporteGrid from "../../Components/TransportGrid/TransporteGrid";
import PuntosGrid from "../../Components/PuntosGrid/PuntosGrid";
import ParadasGrid from "../../Components/ParadasGrid/ParadasGrid";

function Info(){
    const [activeSection, setActiveSection] = useState('Pistas');
    const navigate =useNavigate();
    
    
    const renderSection = () => {
        const sectionMap=new Map()
        sectionMap.set('Pistas',<TrackGrid/>)
        sectionMap.set('Condiciones Climaticas',<Weather/>)
        sectionMap.set('Transportes',<TransporteGrid/>)
        sectionMap.set('Puntos de interes',<PuntosGrid/>)
        sectionMap.set('Paradas',<ParadasGrid/>)

        return sectionMap.get(activeSection)
      };

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
            {renderSection()}
    </div>
    )
}

export default Info;