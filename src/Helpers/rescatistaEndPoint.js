export function eliminarRescatista(legajo) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Rescatista?leg=${legajo}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function agregarRescatista(rescatista) {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Rescatista?ape=${rescatista.apellido}&nom=${rescatista.nombre}&leg=${rescatista.legajo}&userName=${rescatista.usuario}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}