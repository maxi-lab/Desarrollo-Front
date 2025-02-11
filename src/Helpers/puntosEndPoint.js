
import { API_URL_BACKEND } from "../data/API/env";
export function eliminarPunto(punto,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,

        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}PuntoInteres?nom=${punto}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function agregarPunto(punto,token) {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}PuntoInteres?nombre=${punto.nombre}&nomParada=${punto.parada}&tipo=${punto.tipo}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}