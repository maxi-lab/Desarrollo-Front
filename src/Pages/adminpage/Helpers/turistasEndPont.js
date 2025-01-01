export function eliminarTurista(dni) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Turista?dni=${dni}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    
}
 export function agregarTurista(turista) {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Turista?dni=${turista.dni}&ape=${turista.apellido}&nombre=${turista.nombre}&nomUser=${turista.nomUsr}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}