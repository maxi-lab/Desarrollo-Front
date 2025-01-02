export function eliminarPunto(punto) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/PuntoInteres?nom=${punto}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function agregarPunto(punto) {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/PuntoInteres?nombre=${punto.nombre}&nomParada=${punto.parada}&tipo=${punto.tipo}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}