export function eliminarTurista(dni,token) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
        method: "DELETE",
        headers:myHeaders,
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Turista?dni=${dni}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    
}
 export function agregarTurista(turista,token) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "POST",
    headers:myHeaders,
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Turista?dni=${turista.dni}&ape=${turista.apellido}&nombre=${turista.nombre}&nomUser=${turista.nomUsr}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}