export function crearSolicitud(nomPista){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Solicitud?pista=${nomPista}` , requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function atenderSolicitud(codigo){

  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Solicitud?cod=${codigo}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}