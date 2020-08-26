import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '@fortawesome/fontawesome-free/js/all.js';

const CardClima = ({resultado}) => {
    const [uv, setUV] = useState ("");

    const obtenerCoord = async () => {
        const apikey = 'b4ba94e51e1819996a9d8eeb9dda02d1';
        const lat = resultado.coord.lat;
        const long = resultado.coord.lon;
        const url = `http://api.openweathermap.org/data/2.5/uvi?appid=${apikey}&lat=${lat}&lon=${long}`;
        const api = await fetch(url);
        const respuesta = await api.json();
        setUV(respuesta.value);
    }
    obtenerCoord();
    return (
        <Card>
            <Card.Body>
                <Card.Title><i className="fas fa-map-marker-alt fa-1x mx-2"></i>{resultado.name}, {resultado.sys.country}</Card.Title>
                <Row className="align-items-center">
                <img src={`http://openweathermap.org/img/wn/${resultado.weather[0].icon}@2x.png`} alt={`http://openweathermap.org/img/wn/${resultado.weather[0].main}`}/>
                <h2>{resultado.main.temp} °C</h2>
                </Row>
                <Card.Text>
                   <p>Minima: {resultado.main.temp_min} °C - Maxima: {resultado.main.temp_max} °C</p>
                   <p>Humedad: {resultado.main.humidity} % - UV: {uv}</p>
                   <p>Sensacion térmica: {resultado.main.feels_like} °C</p>
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default CardClima;