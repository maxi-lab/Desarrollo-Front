import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid2 } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function createData(name, temperature, feelslike, wind, direction) {
  return { name, temperature, feelslike, wind, direction };
}

function temp(deg){
  if (deg == null) {
      return '-'
  } else {
    return deg + ' °C'
  }
}

function speed(sp){
  if (sp == null) {
    return '-'
  } else {
    return sp + ' Km/h'
  }
}

function time(weatherdata){
  const hours = new Date().getHours()
  if (0 <= hours && hours < 3) {
    const weathernow = weatherdata.forecast[0]
   return(weathernow)
  }else  if (3 <= hours && hours < 6) {
    const weathernow = weatherdata.forecast[1]
    return(weathernow)
  }else  if (6 <= hours && hours < 9) {
    const weathernow = weatherdata.forecast[2]
    return(weathernow)
  }else  if (9 <= hours && hours < 12) {
    const weathernow = weatherdata.forecast[3]
    return(weathernow)
  }else  if (12 <= hours && hours < 15) {
    const weathernow = weatherdata.forecast[4]
    return(weathernow)
  }else  if (15 <= hours && hours < 18) {
    const weathernow = weatherdata.forecast[5]
    return(weathernow)
  }else  if (18 <= hours && hours < 21) {
    const weathernow = weatherdata.forecast[6]
    return(weathernow)
  }else  if (21 <= hours && hours < 24) {
    const weathernow = weatherdata.forecast[7]
    return(weathernow)
  }else{
    const weathernow = weatherdata.forecast[0]
    return(weathernow);
  }
}

function arrow(degrees){
  switch(degrees){
    case ('N'):
      return '↑';
    case('NE'):
      return '↗';
    case ('E'):
      return '→';
    case ('SE'):
      return '↘';
    case ('S'):
      return '↓';
    case ('SW'):
      return '↙';
    case ('W'):
      return '←';
    case ('NW'):
      return '↖';
    case ('NNE'):
      return '↗';
    case('ENE'):
      return '↗';
    case ('SSE'):
      return '↘';
    case ('ESE'):
      return '↘';
    case ('SSW'):
      return '↙';
    case ('WSW'):
      return '↙';
    case ('NNW'):
      return '↖';
    case ('WNW'):
      return '↖';
    default:
      return '-';
  }
}

export default function Weather() {
  const [weathernow, setWeathernow] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://api.weatherunlocked.com/api/resortforecast/54884003?app_id=30129f08&app_key=d9734555a33fbf13252c9234f2619bef", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const d=time(result)
        console.log(d)
        setWeathernow(d)
        console.log(weathernow)
        setLoading(false)
      })
      .catch((error) => console.error(error));
  },[]);

  console.log(weathernow);
  const sectors = weathernow
  ? [
    createData('Base', temp(weathernow.base.temp_c), temp(weathernow.base.feelslike_c), speed( weathernow.base.windspd_kmh), arrow(weathernow.base.winddir_compass)),
    createData('Medio', temp(weathernow.mid.temp_c), temp(weathernow.mid.feelslike_c), speed(weathernow.mid.windspd_kmh), arrow(weathernow.mid.winddir_compass)),
    createData('Cima', temp(weathernow.upper.temp_c), temp(weathernow.upper.feelslike_c), speed(weathernow.upper.windspd_kmh), arrow(weathernow.upper.winddir_compass)),
  ]:[];
  if (loading) {
    return <div style={{display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',}}><CircularProgress /></div>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sector</TableCell>
            <TableCell align="right">Temperatura</TableCell>
            <TableCell align="right">Sensación térmica</TableCell>
            <TableCell align="right">Viento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sectors.map((sector) => (
            <TableRow
              key={sector.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{sector.name}</TableCell>
              <TableCell align="right">{sector.temperature}</TableCell>
              <TableCell align="right">{sector.feelslike}</TableCell>
              <TableCell align="right">
                <Grid2 container>
                  <Grid2 size={10}>
                    {sector.wind}
                  </Grid2>
                  <Grid2 size={2}>
                    {sector.direction}
                  </Grid2>
                </Grid2>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};