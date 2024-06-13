// src/components/Header.js

import React from 'react';
import logo from './logo.jpeg';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">CREACIÓN DE CÓDIGOS QR</h1>
      <p className="subtittile">Esta es una aplicación de Patrimonio Nacional para la creación de códigos qr</p>
    </header>
  );
};

export default Header;
