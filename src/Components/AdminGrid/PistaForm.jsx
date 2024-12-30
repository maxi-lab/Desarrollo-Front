import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";


export default function PistaForm() {
    
   
   return <>
    <TextField label={'Nombre de pista'}/>
    <RadioGroup defaultValue={"Muy Facil"} >
    <FormControlLabel value={"Muy Facil"} control={<Radio/>} label="Muy Facil"/>
    <FormControlLabel
        value="Facil"
        control={<Radio />}
        label="Facil"/>
    <FormControlLabel value={"Intermedio"} control={<Radio/>} label="Intermedio"/>
    <FormControlLabel value={"Dificil"} control={<Radio/>} label="Dificil"/>    
    </RadioGroup> 
    <TextField label={'Parada terminal'}/>
    <TextField label={'Transporte'}/>
    
    
    </>
}