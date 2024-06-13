import React from 'react';
import Header from '../components/Header/Header';
import QrCodeGenerator from '../components/Generadorqr/generadorqr';
import Footer from '../components/Footer/Footer';

const Generador = () => (
  <main>
    <Header />
    <QrCodeGenerator />
    <Footer/>
  </main>
);

export default Generador;