import React, { useState } from 'react';
import Mapa from '../../assets/Mapa.jpg';
import './Menu.css';
/* import Login from './Login';
import Icon from './Icon.png';
import App from './App';
import Info from './Info'
import {useNavigate} from 'react-router-dom'; */
import { Heading } from '../../Components/Heading/Headiing';

function Menu() {
    /* const navigate =useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    }
    const rescate=()=>{
        alert('Rescate en camino')
    }
    const handleInfoClick = () => {
        navigate('/info');
    } */
    return(
        <div className='MenuContainer'>
            {/* <div className='top'>
                <button id='login' onClick={handleLoginClick}>Iniciar sesión</button>
                <button id='emergency' onClick={rescate}>Emergencia</button>
                <div id='menu'>
                    <button className='MenuButton' onClick={handleInfoClick}>Pistas</button>
                    <button className='MenuButton' onClick={handleInfoClick}>Clima</button>
                </div>
                <div id='Pinos'>
                    <img src={Icon} id='icon'></img>
                    <h1 id='AppName'>Los Pinos</h1>
                </div>
            </div> */}
            <Heading/>
             <div className='bottom'>
                <img src={Mapa} className='image'></img>
            </div>
        </div>
);}

export default Menu