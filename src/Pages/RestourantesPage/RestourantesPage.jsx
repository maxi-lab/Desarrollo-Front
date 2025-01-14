import { useEffect, useState } from "react";
import { Heading } from "../../Components/Heading/Headiing";
import RestoList from "../../Components/RestoList/RestoList";
const Restorantes=[{id:1,nombre:"ifeiw",calificacion:5},{id:2,nombre:"ifede",calificacion:4},{id:3,nombre:"de",calificacion:3}]

export default function RestorantesPage(){
    const [restorantes,setRestorantes]=useState([])
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://localhost:7268/api/PuntoInteres", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                let data=result.filter(r=>r.nombreTipo==="Restorante")
                data=data.map((d,i)=>{return{...d,id:i+1,calificacion:0}})
                console.log(data)
                setRestorantes(data)
            })
            .catch((error) => console.error(error));
    },[])
    return <>
    <Heading/>
    <h1>Resto</h1>
    <RestoList restos={restorantes}/>
    </>
}