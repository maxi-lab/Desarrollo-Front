import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(()=>{
    console.log('guardando en localstorage...')
    return JSON.parse(localStorage.getItem("User"))||{rol:'',userName:'',email:''}
  });//esto tendria que estar en el local storage
  useEffect(()=>{
    localStorage.setItem("User",JSON.stringify(user))
    if (user.rol||user.userName||user.email) {
      const timeout=setTimeout(()=>{
        localStorage.clear()
        alert("Sesion expirada")
        
        setUser({rol:'',userName:'',email:''})
       
      },900000)
      return ()=>clearTimeout(timeout)  
    }
    
  },[user])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};