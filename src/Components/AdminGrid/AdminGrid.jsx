import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
export  function AdminGrid({columns, rows}) {
  return (
    <Box
      sx={{
        height: 400,
        width: '80%', // ajustar según el tamaño deseado
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto', // centra horizontalmente
        mt: 20 // margen superior opcional
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        autoPageSize
      />
    </Box>
      );
    }
