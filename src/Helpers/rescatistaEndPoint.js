import { API_URL_BACKEND } from "../data/API/env";
export function eliminarRescatista(legajo,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}Rescatista?leg=${legajo}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function agregarRescatista(rescatista,token) {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,

    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Rescatista?ape=${rescatista.apellido}&nom=${rescatista.nombre}&leg=${rescatista.legajo}&userName=${rescatista.usuario}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}