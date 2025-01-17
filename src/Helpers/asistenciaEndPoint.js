export function crearAsistencia(a){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/Asistencia?dni=${a.dni}&leg=${a.legajo}&nomPista=${a.nomPista}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}