
import { API_URL_BACKEND } from "../data/API/env";
export function crearAsistencia(a,token){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "POST",
        headers: myHeaders,

        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Asistencia?dni=${a.dni}&leg=${a.legajo}&nomPista=${a.nomPista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function ambulancia(c,token){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      
      redirect: "follow"
    };

fetch(`${API_URL_BACKEND}Asistencia?c=${c}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
export function eliminarAsistencia(c,token){
    
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const raw = "";
  
  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Asistencia?c=${c}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}