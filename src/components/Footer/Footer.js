import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.png';
import img4 from './img4.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <a href="https://www.patrimonionacional.es/accesibilidad">Accesibilidad</a> |
        <a href="https://www.patrimonionacional.es/politica-de-privacidad">Política de privacidad</a> |
        <a href="https://www.patrimonionacional.es/aviso-legal">Aviso Legal</a> |
        <a href="https://www.patrimonionacional.es/politica-de-cookies">Política de Cookies</a>
      </div>
      <div className="logos">
        <img src={img1} alt="Logo 1" className="imgfoot" />
        <img src={img2} alt="Logo 2" className="imgfoot" />
        <img src={img3} alt="Logo 3" className="imgfoot" />
        <img src={img4} alt="Logo 4" className="imgfoot" />
      </div>
    </footer>
  );
};

export default Footer;
