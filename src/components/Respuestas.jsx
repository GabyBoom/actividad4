import React from 'react';

const Respuestas = (props) => {
    return (
        <div>
            <h2 style={{color: props.color}}>{props.name}</h2>
        </div>
    );
}

export default Respuestas;
