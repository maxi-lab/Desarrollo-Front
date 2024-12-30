import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
export default function PuntoInteresForm() {
    return <>
    <TextField label={'Nombre de punto de interés'}/>
    <RadioGroup defaultValue={"Restaurante"} >
    <FormControlLabel value={"Restaurante"} control={<Radio/>} label="Restaurante"/>
    <FormControlLabel value={"Centro de Atencion"} control={<Radio/>} label="Centro de Atencion"/>
    <FormControlLabel value={"Rental"} control={<Radio/>} label="Rental"/>
    <FormControlLabel value={"Centro Medico"} control={<Radio/>} label="Centro Medico"/>
    </RadioGroup>
    <TextField label={'Parada'}/>
    </>
}