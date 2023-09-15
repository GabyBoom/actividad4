import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Encuestas from './components/Encuestas';


function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones: 
    [{ name: 'Rojo', color: 'red'},
     { name: 'Azul', color: 'blue'},
      { name: 'Verde', color: 'green'}]},
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    [{name:'Pizza', color: 'white'},
     {name:'Hamburguesa', color: 'white'},
      {name:'Sushi', color: 'white'}]},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicacion de Encuestas</h1>
        {/* Contenido de las páginas */}
        <Encuestas encuestas={encuestas} />
      </header>
    </div>
  );
}

export default App;
