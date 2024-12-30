import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

export default function TransporteForm() {
    return <>
    <TextField label={'Nombre de transporte'}/>
    <TextField label={'Capacidad'}/>
    <RadioGroup defaultValue={"Poma"} >
        <FormControlLabel value={"Poma"} control={<Radio/>} label="Poma"/>
        <FormControlLabel value={"Telesilla"} control={<Radio/>} label="Telesilla"/>    
    </RadioGroup> 
    </>
}