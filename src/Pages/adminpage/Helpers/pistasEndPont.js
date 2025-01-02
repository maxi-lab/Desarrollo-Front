export async function eliminarPista(pista) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
     await fetch(`https://localhost:7268/api/Pista?nommbre=${pista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));    
}
export async function alternarEstado(pista) {
  const requestOptions = {
    method: "PUT",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Pista?nomPista=${pista}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export async function agregarPista(pista){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/Pista?nom=${pista.nombre}&nomParada=${pista.paradaTerminal}&nomTrans=${pista.transporte}&dif=${pista.dificultad}\n`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}