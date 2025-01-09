import React, { useState } from 'react';
import Login from './Pages/LogIn/Login';
import Menu from './Pages/Menu/Menu';
import Info from './Pages/Info/Info'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import AdminPage from './Pages/AdminPage/AdminPage';
import AppRouter from './Router/AppRouter';

function App() {


  return (  
    <UserProvider>
      <AppRouter/>
    </UserProvider>
  );
}

export default App;
