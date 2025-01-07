import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("User"))||{rol:'',name:'',email:''}
  });//esto tendria que estar en el local storage
  useEffect(()=>{
    localStorage.setItem("User",JSON.stringify(user))
  },[user])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};