import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerData, setRegisterData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    repetirContrasena: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${username}\nContraseña: ${password}`);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de registro
    alert("Su solicitud se ha enviado correctamente");
    setIsModalOpen(false);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Acceso</h2>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Link to="/creacionqr">
        <button className="btn" type='submit'>Acceder</button>
        </Link>

      </form>
      <div className="register-section">
        <h2>Si no tienes cuenta, regístrate aquí</h2>
        <button onClick={handleModalOpen}>Registrar</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={registerData.nombre}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={registerData.apellidos}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={registerData.correo}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={registerData.contrasena}
                onChange={handleRegisterChange}
                required
              />
              <label htmlFor="repetirContrasena">Repetir Contraseña</label>
              <input
                type="password"
                id="repetirContrasena"
                name="repetirContrasena"
                value={registerData.repetirContrasena}
                onChange={handleRegisterChange}
                required
              />
              <button type="submit">Aceptar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
