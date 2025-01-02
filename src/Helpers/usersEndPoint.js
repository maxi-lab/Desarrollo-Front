export function agregarUser(user){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/User/SingUp?pass=${user.name}&name=${user.password}&mail=${user.email}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function acenderUser(user){
    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/User/Upgrade?name=${user}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
export function decenderUser(user){
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };
  
  fetch(`https://localhost:7268/api/User/DownGrade?name=${user}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
export function eliminarUser(user){
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`https://localhost:7268/api/User/Eliminar?name=${user}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}