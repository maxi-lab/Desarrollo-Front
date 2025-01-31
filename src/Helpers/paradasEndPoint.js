import { API_URL_BACKEND } from "../data/API/env";
export function eliminarParada(parada) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Paradas?nombre=${parada}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    
}
export function agregarParada(parada){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Paradas?altura=${parada.altura}&nombre=${parada.nombre}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}