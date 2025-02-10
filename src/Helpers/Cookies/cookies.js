export function getCookie(clave){
    const c=document.cookie.split(";")
    for(let cookie of c){
        cookie=cookie.trim();
        if(cookie.startsWith(clave+"=")){
            return cookie.substring(clave.length +1)
        }
    }
    return null
}
export function deleteCookie(clave){
    if(document.cookie.split(";").some((cookie)=>cookie.startsWith(`${clave}=`))){
    document.cookie = `${clave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}