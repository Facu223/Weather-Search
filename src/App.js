import React, { useState } from "react";
import Form from "./components/Form";
import Key from "./components/Key.json";
import DatosClima from "./components/DatosClima";

function App() {
  const [clima, setClima] = useState({});
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [error, setError] = useState(false);

  const traerClima = async (e) => {
    e.preventDefault();
    const { ciudad, pais } = e.target.elements;
    const valorCidad = ciudad.value;
    const valorPais = pais.value;
    if (valorCidad.trim() === "" || valorPais.trim() === "") {
      setError(true);
      setMostrarDatos(false);
    } else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${valorCidad},${valorPais}&appid=${Key[0].key}&units=metric`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      setClima({
        country: responseJSON.sys.country,
        city: responseJSON.name,
        temp: responseJSON.main.temp,
        temp_max: responseJSON.main.temp_max,
        temp_min: responseJSON.main.temp_min,
      });
      setMostrarDatos(true);
      setError(false);
    }
  };

  return (
    <>
      <div className="container1">
        <Form traerClima={traerClima} />
        {error ? (
          <p class="alert alert-danger">"Oops, faltan datos por completar"</p>
        ) : (
          ""
        )}
        <DatosClima clima={clima} mostrarDatos={mostrarDatos} />
      </div>
    </>
  );
}

export default App;
