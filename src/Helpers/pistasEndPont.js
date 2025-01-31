import { API_URL_BACKEND } from "../data/API/env";
export async function eliminarPista(pista) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
     await fetch(`${API_URL_BACKEND}Pista?nommbre=${pista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));    
}
export async function alternarEstado(pista) {
  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Pista?nomPista=${pista}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export async function agregarPista(pista){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Pista?nom=${pista.nombre}&nomParada=${pista.paradaTerminal}&nomTrans=${pista.transporte}&dif=${pista.dificultad}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}