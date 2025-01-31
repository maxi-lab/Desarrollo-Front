import { API_URL_BACKEND } from "../data/API/env";
export  function agregarUser(user){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}User/SingUp?pass=${user.name}&name=${user.password}&mail=${user.email}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function acenderUser(user){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}User/Upgrade?name=${user}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function decenderUser(user){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}User/DownGrade?name=${user}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export function eliminarUser(user){
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`${API_URL_BACKEND}User/Eliminar?name=${user}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export async function logIn(credentials){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const raw = JSON.stringify({
  "username": credentials.username,
  "password": credentials.password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

return fetch(`${API_URL_BACKEND}User/LogIn`, requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => {throw error});
}
export async function reestablecerPass(u){
  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}User/CambiarPasswd?userName=${u}&newPassword=${u}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export async function cambiarPass(u,newPass){
  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`${API_URL_BACKEND}User/CambiarPasswd?userName=${u}&newPassword=${newPass}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}