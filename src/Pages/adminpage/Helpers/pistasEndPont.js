export async function eliminarPista(pista) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
     await fetch(`https://localhost:7268/api/Pista?nommbre=${pista.nombre}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));    
}