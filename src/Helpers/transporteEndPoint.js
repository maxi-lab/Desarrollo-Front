import { API_URL_BACKEND } from "../data/API/env";
export async function eliminarTrasporte(transporte) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Transporte?nom=${transporte}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export async function alternarEstadoT(transporte) {
  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}api/Transporte?nom=${transporte}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
}
export function agregarTransporte(transporte) {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Transporte?nombre=${transporte.nombre}&tipo=${transporte.tipo}&capacidad=${transporte.capacidad}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}