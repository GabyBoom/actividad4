import React from 'react';
import Respuestas from './Respuestas';

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <div key={encuesta.id}>
                        <h3>{encuesta.pregunta}</h3>
                        {encuesta.opciones.map(opcion => (
                            <Respuestas name={opcion.name} color={opcion.color} />                            
                        ))}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;