import '../../Pages/Menu/Menu.css'
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/Icon.png';
import { AppBar, Avatar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles'
import theme from '../../styles/Headingstyle/HeadingStyle';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';  
export function Heading() {
    const navigate =useNavigate();//xq... xq... xq cesar la puta madre
    const {user,setUser} = useContext(UserContext);
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
    const VolverMenu=()=>{
        navigate('/menu');
    }
    const cerrarSeccion=()=>{
        setUser({rol:'',name:'',email:''});
        VolverMenu();
    }
    return (<>
        <Box >
            <ThemeProvider theme={theme}>
            <AppBar  position="static" color="ThemeAppbar" enableColorOnDark>
                <Toolbar>
                <Avatar src={Icon}></Avatar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={VolverMenu}
                    
                    sx={{ mr: 2 }}
                    >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,mr:2 }}>
                        LOS PINOS
                    </Typography>
                </IconButton>
                <Typography sx={{ flexGrow: 1,mr:2 }}/>
                <ButtonGroup>
                    {user.rol === 'Admin' ?<Button color="primary" variant="outlined" onClick={gestorPistas} size="small">Panel de administrador
                     </Button>:''}   
                    
                    <Button 
                    color="primary"
                    variant="outlined"
                    onClick={handleInfoClick}
                    size="small"
                    >Informacion</Button>,
                    <Button
                    color="error"
                    variant="contained"
                    onClick={rescate}
                    size="mediun">
                    Emergencia
                    </Button>
                    {user.rol===''?<Button 
                    color="primary"
                    variant="outlined"
                    onClick={handleLoginClick}
                    size="large">Iniciar sesion</Button>:<Button color="primary"
                    variant="outlined"
                    onClick={cerrarSeccion}
                    size="large">Cerrar sesion</Button>}
                    
                </ButtonGroup>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
             
    </>);
}
