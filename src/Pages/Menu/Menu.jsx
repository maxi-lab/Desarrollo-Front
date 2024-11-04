import React, { useState } from 'react';
import Mapa from '../../assets/Mapa.jpeg';
import './Menu.css';

import { Heading } from '../../Components/Heading/Headiing';

function Menu() {

    return(
        <div className='MenuContainer'>
            {}
            <Heading/>
             <div className='bottom'>
                <img src={Mapa} className='image'></img>
            </div>
        </div>
);}

export default Menu