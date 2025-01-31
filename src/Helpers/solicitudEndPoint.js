import { API_URL_BACKEND } from "../data/API/env";
export function crearSolicitud(nomPista){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Solicitud?pista=${nomPista}` , requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function atenderSolicitud(codigo){

  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Solicitud?cod=${codigo}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}