
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useContext, useState } from "react";
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function AccountMenu({VolverMenu}){
    const navigate=useNavigate()
    const [anchorEl,setAnchorEl]=useState(null)
    const open=Boolean(anchorEl)
    const {user,setUser}=useContext(UserContext)
    const firstLetter=user.userName[0]
    const hadleMenu=(e)=>setAnchorEl(e.currentTarget)
    const closeMenu=()=>setAnchorEl(null)
    const gestorPistas=()=>{
        navigate('/adminpage');
    }
    const toProfile=()=>navigate("/profile")
    const toAccount=()=>navigate("/account")
    const rolMenu=()=>{ //despues esto va con un hashmap
        if (user.rol==="Admin") {
            return <>
                <MenuItem onClick={gestorPistas}>
                    Panel de administrador
                </MenuItem>
            </>
        }
        return null
    }
    const cerrarSeccion=()=>{
        setUser({rol:'',userName:'',email:''});
        VolverMenu();
    }
    return <>
    <Tooltip title="Perfil">
        <IconButton
            onClick={hadleMenu}
            size="small"
            sx={{ml:2}}
            aria-controls={open?"account":undefined}
            aria-haspopup='true'
            aria-expanded={open?'true':undefined}
        >
            <Avatar sx={{width:32,height:32}}>{firstLetter?firstLetter:'P'}</Avatar>
        </IconButton>
    </Tooltip>
    <Menu
        anchorEl={anchorEl}
        id="account"
        open={open}
        onClose={closeMenu}
        onClick={closeMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={toProfile}>
           Perfil
        </MenuItem>
        <MenuItem onClick={toAccount}>
           Mi cuenta
        </MenuItem>
        <Divider />
        
        {rolMenu()}
        <MenuItem onClick={cerrarSeccion}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesion
        </MenuItem>
      </Menu>
    </>
}