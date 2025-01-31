import { API_URL_BACKEND } from "../data/API/env";
export function eliminarPunto(punto) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}PuntoInteres?nom=${punto}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function agregarPunto(punto) {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}PuntoInteres?nombre=${punto.nombre}&nomParada=${punto.parada}&tipo=${punto.tipo}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}