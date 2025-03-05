
import { API_URL_BACKEND } from "../data/API/env";
export function eliminarTurista(dni,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,

        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Turista?dni=${dni}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

 
export function agregarTurista(turista) {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: "POST",
    headers:myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Turista?dni=${turista.dni}&ape=${turista.apellido}&nombre=${turista.nombre}&nomUser=${turista.nomUsr}&t=${turista.tel}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}