
import '../../Pages/Menu/Menu.css'
import Login from '../../Pages/LogIn/Login';
import Info from '../../Pages/Info/Info';
import App from '../../App';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/Icon.png';

export function Heading(params) {
    const navigate =useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    }
    const rescate=()=>{
        alert('Rescate en camino')
    }
    const handleInfoClick = () => {
        navigate('/info');
    }
    const gestorPistas=()=>{
        navigate('/adminpage');
    }
    const handleWetherClick=()=>{
        navigate('/Weather');
    }
    return (<>
        <div className='top'>
                <button id='login' onClick={handleLoginClick}>Iniciar sesión</button>
                <button id='emergency' onClick={rescate}>Emergencia</button>
                
                <div id='menu'>
                    <button className='MenuButton' onClick={handleInfoClick}>Informacion</button>
                    <button className='MenuButton' onClick={gestorPistas}>GestorPistas</button>
                </div>
                <div id='Pinos'>
                    <a href="/"><img src={Icon} id='icon'></img></a>
                    <h1 id='AppName'>Los Pinos</h1>
                </div>
        </div>
             
    </>);
}