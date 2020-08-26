import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Encabezado = (props) => {
    return (
        <Jumbotron className="text-center bg-dark text-white">
            <h1>{props.titulo}</h1>
            <p>
                Utilizando datos del proyecto OpenWeather https://home.openweathermap.org/
            </p>
        </Jumbotron>
    );
};

export default Encabezado;