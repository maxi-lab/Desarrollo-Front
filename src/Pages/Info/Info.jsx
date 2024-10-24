import React, {useState} from "react";
import TrackTable from '../../Components/TrackTable/TrackTable'
import Weather from "../../Components/Weather/Weather";
import Icon from '../../assets/Icon.png';
import {useNavigate} from 'react-router-dom';
import './Info.css';


function Info(){
    const [activeSection, setActiveSection] = useState('Pistas');
    const navigate =useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    }
    const rescate=()=>{
        alert('Rescate en camino')
    }
    
    const renderSection = () => {
        if (activeSection === 'Pistas') {
          return <TrackTable />;
        } else if (activeSection === 'Cond. del Tiempo') {
          return <Weather />;
        }
        return null;
      };
    
    return(
        <div className='MenuContainer'>
        <div className='top'>
            <button id='login' onClick={handleLoginClick}>Iniciar sesión</button>
            <button id='emergency' onClick={rescate}>Emergencia</button>
            <div id='menu'>
                <button className='MenuButton' onClick={() => setActiveSection ('Pistas')}>Pistas</button>
                <button className='MenuButton' onClick={() => setActiveSection ('Cond. del Tiempo')}>Clima</button>
            </div>
            <div id='Pinos'>
                <img src={Icon} id='icon'></img>
                <h1 id='AppName'>Los Pinos</h1>
            </div>
        </div>
         <div className='bottom'>
            <div className='table'>
                <h1 className="subtitle">{activeSection === 'Pistas' ? 'Estado de las Pistas' : 'Condiciones Climáticas'}</h1>
                {renderSection()}
            </div>
        </div>
    </div>
    )
}

export default Info;