
import '../../Pages/Menu/Menu.css'
import Login from '../../Pages/LogIn/Login';
import Info from '../../Pages/Info/Info';
import App from '../../App';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/Icon.png';
import { AppBar, Avatar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles'
import theme from '../../styles/Headingstyle/HeadingStyle';
  
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
    const VolverMenu=()=>{
        navigate('/menu');
    }
    const handleWetherClick=()=>{
        navigate('/Weather');
    }
    const buttons =[
            <ButtonGroup>
                    <Button
                    color="primary"
                    variant="outlined"
                    onClick={gestorPistas}
                    size="small"
                    >GestorPistas
                    </Button>,
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
                    </Button>,
                    <Button 
                    
                    color="primary"
                    variant="outlined"
                    onClick={handleLoginClick}
                    size="large">Login</Button>
            </ButtonGroup>

    ]
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
                {buttons}
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
             
    </>);
}
//.image {
// width: 100%;
// height: 100%;
// object-fit: fill;
//}