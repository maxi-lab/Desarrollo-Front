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
export function atenderSolicitud(codigo,token){
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Solicitud?cod=${codigo}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}