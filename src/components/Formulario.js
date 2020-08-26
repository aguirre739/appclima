import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Formulario = (props) => {
  const [busqueda, setBusqueda] = useState({
    //creamos la estructura del objeto
    ciudad: "",
    pais: "",
  });

  const [error, setError] = useState(false);
  const [mjError, setMjError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setBusqueda({
      //destructurar el objeto para mantener una copia del objeto y cambiar solo una propiedad
      ...busqueda, //spred operator
      [e.target.name]: e.target.value, // clave: valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //primero hay que validar los campos
    if (busqueda.ciudad.trim() === "" || busqueda.pais === "") {
      //mostrar un cartel que debe completar todos los campos
      console.log("aqui esta todo mal");
      setError(true);
      setMjError("Todos los campos son obligatorios");
      return;
    }
    console.log("todo ok");
    setError(false);
    //consultar a la API
    consultarApi();
  };

  const consultarApi = async () => {
      const apikey = 'b4ba94e51e1819996a9d8eeb9dda02d1';
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&appid=${apikey}&units=metric`;
    const api = await fetch(url);
    console.log(api);
    const respuesta = await api.json();
    console.log(respuesta);

    if(respuesta.cod === "404"){
        //mostrar el mensaje de error 
        setError(true);
        setMjError("No se encontró la ciudad ingresada");
        props.setResultado({});
    }else{
        setError(false);
        props.setResultado(respuesta);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      {error === true ? (
        <Alert variant={"danger"}>{mjError}</Alert>
      ) : null}
      <Form.Group controlId="ciudad">
        <Form.Label className="text-white">Ciudad *</Form.Label>
        <Form.Control
          type="text"
          name="ciudad"
          placeholder="Ej.: San Miguel de Tucumán"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="pais">
        <Form.Label className="text-white">Pais *</Form.Label>
        <Form.Control as="select" name="pais" onChange={handleChange}>
          <option value="">--Selecciones un país--</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brasil</option>
          <option value="CL">Chile</option>
          <option value="RU">Rusia</option>
          <option value="ES">España</option>
        </Form.Control>
        <Button variant="warning" type="submit" className="w-100 my-3">
          Buscar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
