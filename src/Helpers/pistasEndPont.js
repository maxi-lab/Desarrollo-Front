import { API_URL_BACKEND } from "../data/API/env";
export async function eliminarPista(pista,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
      
     await fetch(`${API_URL_BACKEND}Pista?nommbre=${pista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));    
}
export async function alternarEstado(pista,token) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Pista?nomPista=${pista}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export async function agregarPista(pista,token){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}Pista?nom=${pista.nombre}&nomParada=${pista.paradaTerminal}&nomTrans=${pista.transporte}&dif=${pista.dificultad}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}