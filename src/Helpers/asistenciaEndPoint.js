import { API_URL_BACKEND } from "../data/API/env";
export function crearAsistencia(a){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Asistencia?dni=${a.dni}&leg=${a.legajo}&nomPista=${a.nomPista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}