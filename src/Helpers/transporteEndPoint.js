import { API_URL_BACKEND } from "../data/API/env";
export async function eliminarTrasporte(transporte,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch(`${API_URL_BACKEND}Transporte?nom=${transporte}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export async function alternarEstadoT(transporte, token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Transporte?nom=${transporte}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
}
export function agregarTransporte(transporte,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Transporte?nombre=${transporte.nombre}&tipo=${transporte.tipo}&capacidad=${transporte.capacidad}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}