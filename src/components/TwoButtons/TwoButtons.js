
import React from 'react';
import { Link } from 'gatsby';
import './TwoButtons.css';

const TwoButtons = () => {
  return (
    <div className="button-container">
      <Link to="/registroAcceso">
        <button className="btn">Acceder</button>
      </Link>
      <a href="https://www.patrimonionacional.es/sobre-patrimonio/conoce-nuestra-historia">
      <button className="btn">Información</button></a>
    </div>
  );
};

export default TwoButtons;

