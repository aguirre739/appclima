import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Encabezado from "./components/Encabezado";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  const [resultado, setResultado] = useState({});

  return (
    <div>
      <Encabezado titulo="App del Clima"></Encabezado>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {
              //object.entries devuelve un arreglo con las propiedades que tiene el objeto
              Object.entries(resultado).length !== 0 ? (
                <CardClima resultado={resultado}></CardClima>
              ) : null
            }
          </div>
          <div className="col-sm-12 col-md-6">
            <Formulario setResultado={setResultado}></Formulario>
          </div>
        </div>
      </section>
      <Footer mensaje="&copy; Todos los derechos reservados."></Footer>
    </div>
  );
}

export default App;
