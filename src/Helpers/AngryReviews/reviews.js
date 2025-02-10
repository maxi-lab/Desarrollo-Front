import { API_ANGRY_REVIEWS } from "../../data/API/env";
export function crearPost(title,content,token){

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Token ${token}`);

const raw = JSON.stringify({
  "title": `${title}`,
  "content": `${content}`,
  "categories": []
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${API_ANGRY_REVIEWS }posts/`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
export function crearReseña(token,comment,rating, id){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${token}`);

    const raw = JSON.stringify({
  "comment": `${comment}`,
  "rating": rating,
    });

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r=fetch(`${API_ANGRY_REVIEWS}/posts/${id}/reviews/`, requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => error);
  console.log(r)
  return r
}
export function obtenerReviews(id){
    const raw = "";

const requestOptions = {
  method: "GET",

  redirect: "follow"
};

const r=fetch(`${API_ANGRY_REVIEWS}posts/${id}/reviews`, requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => console.error(error));
    return r;
}
export async function obtenerPosts(){
    const raw = "";

const requestOptions = {
  method: "GET",

  redirect: "follow"
};

const r=fetch(`${API_ANGRY_REVIEWS}posts/`, requestOptions)
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => console.error(error));
  return r
}


export async function getAuthor(token,id){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const r=fetch(`${API_ANGRY_REVIEWS}users/${id}/`, requestOptions)
  .then((response) => response.json())
  .then((result) => result.username)
  .catch((error) => error);
  return r
}