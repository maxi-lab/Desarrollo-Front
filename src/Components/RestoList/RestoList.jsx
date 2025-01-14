import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

export default function RestoList({restos}){
  const navegate=useNavigate()
  const reseniar=(n)=>navegate(`/restos/${n}`)

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {restos.map((r) => {
        const labelId = `checkbox-list-label-${r.id}`;

        return (
          <ListItem
            key={r.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
               
              </IconButton>
            }
            disablePadding
          >
            
            <ListItemButton role={undefined} onClick={()=>reseniar(r.nombre)} dense>
              <ListItemText id={labelId} primary={`Restorante ${r.nombre}`} />
            </ListItemButton>
              <ListItemIcon>
                <Rating value={r.calificacion} readOnly/>
              </ListItemIcon>
          </ListItem>

        );
      })}
    </List>)
}