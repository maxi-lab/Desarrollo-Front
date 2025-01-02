import React, {useState} from "react";
import TrackTable from '../../Components/TrackTable/TrackTable'
import Weather from "../../Components/Weather/Weather";
import Icon from '../../assets/Icon.png';
import {useNavigate} from 'react-router-dom';
import './Info.css';
import { Heading } from '../../Components/Heading/Headiing';
import { TrackGrid } from "../../Components/TrackGrid/TrackGrid";
import { Button, ButtonGroup } from "@mui/material";


function Info(){
    const [activeSection, setActiveSection] = useState('Pistas');
    const navigate =useNavigate();

    
    const renderSection = () => {
        if (activeSection === 'Pistas') {
          return <TrackGrid/>;
        } else if (activeSection === 'Cond. del Tiempo') {
          return <Weather />;
        }
        return null;
      };
    const buttons = [
        <ButtonGroup>
            <Button>
                asd
            </Button>,
            <Button>
                asd
            </Button>
        </ButtonGroup>
    ]
    
    return(
    <div>
       <Heading/>
       <ButtonGroup>
            <Button onClick={() => setActiveSection ('Pistas')}>
                Pistas
            </Button>,
            <Button onClick={() => setActiveSection ('Cond. del Tiempo')}>
                Clima
            </Button>
        </ButtonGroup>
        <h1 className="subtitle">{activeSection === 'Pistas' ? 'Estado de las Pistas' : 'Condiciones Climáticas'}</h1>
            {renderSection()}
    </div>
    )
}

export default Info;