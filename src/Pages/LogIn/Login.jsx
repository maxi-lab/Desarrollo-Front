import React, { useContext, useState } from "react";
import Icon from '../../assets/Icon.png';
import './Login.css';
import { UserContext } from '../../Context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState('login');
    const [email, setEmail] = useState('');
    const { setUser } = useContext(UserContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (isLogin === 'login' ){
            if (username === 'admin' && password === '1234') {
                setUser(username);
            } else {  
                alert('Credenciales incorrectas.');
            }
        } else {
            if (username && email && password) {
                alert('Registro exitoso');
                setIsLogin('login');
            } else {
                alert('Debe completar todos los campos');
            }
        }
    };

    const header = () => {
        switch(isLogin){
            case 'login':
                return <h2>Iniciar sesión</h2>;
            case 'register':
                return <h2>Registrarse</h2>;
            case 'forgotten':
                return <h2>Reestablecer contraseña</h2>;
        }
    }

    const submit = () => {
        switch(isLogin){
            case 'login':
                return 'Entrar';
            case 'register':
                return 'Registrarse';
            case 'forgotten':
                return 'Restaurar';
        }
    }

    return (
        <div className="auth-container">
            <div id='PinosL'>
                <img src={Icon} id='icon'></img>
                <h1 id='AppName'>Los Pinos</h1>
            </div>
            <div className="form">
            <div id="title">{header()}</div>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '300px', padding: '8px' }}
                />
                {(isLogin === 'register' || isLogin === 'forgotten') &&(
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}
                {(isLogin === 'login' || isLogin === 'register') &&(
                    <div>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                )}

                <button type="submit" id='submit' style={{ padding: '10px 15px' }} onClick={handleLogin}>
                    {submit()}
                </button>

                {isLogin === 'login' && (
                    <span className="text">
                      ¿Olvidaste tu contraseña?{' '}
                        <button
                        type="button"
                        onClick={() => setIsLogin('forgotten')}
                        className="secondButton"
                        >Cambiar contraseña</button>
                    </span>
                )}
            </form>
            <p style={{ marginTop: '10px' }}>
                {isLogin === 'login' ? (
                    <span className="text">
                        ¿No tenes cuenta?{' '}
                        <button
                            type="button"
                            onClick={() => setIsLogin('register')}
                            className="secondButton"
                        >
                            Regístrate
                        </button>
                    </span>
                ) : (
                    <span className="text">
                         ¿Ya tenes cuenta?{' '}
                        <button
                            type="button"
                            onClick={() => setIsLogin('login')}
                            className="secondButton"
                        >
                            Inicia sesión
                        </button>
                    </span>
                )}
            </p>
        </div>
        </div>
    );
}

export default Login;