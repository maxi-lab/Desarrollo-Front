import { API_ANGRY_REVIEWS } from "../../data/API/env";
export function registrarse(mail,username,password,confirmPassword){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
  "email": `${mail}`,
  "username": `${username}`,
  "password": `${password}`,
  "confirmPassword": `${confirmPassword}`
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    const r=fetch(`${API_ANGRY_REVIEWS}register/`, requestOptions)
    .then((response) => response.json())
    .then((result) => result.token)
    .catch((error) => console.error(error));
    return r
}
export function login(username,password){

  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username_or_email": `${username}`,
  "password": `${password}`
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r=fetch(`${API_ANGRY_REVIEWS}login/`, requestOptions)
  .then((response) => response.json())
  .then((result) => result.token)
  .catch((error) => error);
  return r;

}