
import { API_URL_BACKEND } from "../data/API/env";
export function eliminarParada(parada,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);  
  const requestOptions = {
        method: "DELETE",
        headers: myHeaders,

        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Paradas?nombre=${parada}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    
}
export function agregarParada(parada,token){
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Paradas?altura=${parada.altura}&nombre=${parada.nombre}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}