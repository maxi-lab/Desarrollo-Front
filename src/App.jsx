import React, { useState } from 'react';
import TrackTable from './TrackTable';
import Weather from './Weather';
import Login from './Login';
import Menu from './Menu';
import Info from './Info'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';

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
