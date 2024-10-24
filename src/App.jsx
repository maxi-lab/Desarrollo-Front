import React, { useState } from 'react';
import Login from './Pages/LogIn/Login';
import Menu from './Pages/Menu/Menu';
import Info from './Pages/Info/Info'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';

function App() {
  // Estado para manejar qué sección está activa
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (  
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Login" element={<Login onLogin={() => {}} />} />
        <Route path='/Info' element={<Info onInfo={() => {}} />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
