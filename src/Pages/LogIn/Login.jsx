import React, { useContext, useState } from "react";
import './Login.css';
import { UserContext } from '../../Context/UserContext';
import { Heading } from "../../Components/Heading/Headiing";
import LogInForm from "../../Components/LogIn/LogInForm";
import SignUp from "../../Components/LogIn/SignUp";
import ForgottenPass from "../../Components/LogIn/ForgottenPass";
import { Button, ButtonGroup } from "@mui/material";
function Login() {
    const [isLogin, setIsLogin] = useState('login');

    const formulario = () => {
        switch(isLogin){
            case 'login':
                return <><LogInForm/></>;
            case 'register':
                return <><SignUp/></>;
            case 'forgotten':
                return <><ForgottenPass/></>;
        }
    }

    return (<>
        <Heading/>
        <div className="auth-container">
            <ButtonGroup variant="contained" aria-label="Basic button group" style={{top:'100px', position:'absolute'}}>
                <Button onClick={() => setIsLogin('login')}>Iniciar sesión</Button>
                <Button onClick={() => setIsLogin('register')}>Registrarse</Button>
                <Button onClick={() => setIsLogin('forgotten')}>Recuperar contraseña</Button>
            </ButtonGroup>
           {formulario()}
        </div>
        </>);
}

export default Login;