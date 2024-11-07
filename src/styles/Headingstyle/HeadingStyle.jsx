import {createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#53c4f7',
        dark: '#002884',
        contrastText: '#ffff',

      },
      ThemeAppbar: {
        light: '#757ce8',
        main: '#000',
        dark: '#002884',
        contrastText: '#53c4f7',

      },
      secondary: {
        light: '#ff7961',
        main: '##9778ce',
        dark: '#ba000d',
        contrastText: '#53c4f7',
      },
    },
  });
export default theme