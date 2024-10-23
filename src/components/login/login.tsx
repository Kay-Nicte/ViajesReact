import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../../firebase/firebase';
import { User } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('Usuario:', result.user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <div className='div-login text-light align-items-center justify-content-center text-center my-4'>

        <label htmlFor="username" className='mb-2'>Usuario</label>
        <input
          type="text"
          id="username"
          placeholder="Ingresa tu usuario"
          className="form-control mb-3 text-center"
        />
        <label htmlFor="password" className='mb-2'>Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          className="form-control mb-3 text-center"
        />
      </div>

      <h4 className='mb-3'>O quizás prefieras:</h4>

      <div>
        {user ? (
          <div className="welcome-container">
            <h3>Bienvenido, {user.displayName}</h3>
            <button className="btn btn-danger" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <button className="login-btn bg-light text-dark" onClick={handleLogin}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="google-icon" />
            Iniciar Sesión con Google
          </button>
        )}
      </div>
    </div>

  );
};

export default Login;