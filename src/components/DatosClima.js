import React from "react";

const DatosClima = ({ clima, mostrarDatos }) => {
  const climaInfo = () => {
    if (clima.temp > 0 && clima.temp < 11) {
      return "Hoy deberían buscar sus abrigos, amigos!";
    }

    if (clima.temp >= 11 && clima.temp <= 20) {
      return "No necesitarán tanto abrigo en casa, pero si llegan a salir, haganle caso a mama y lleven su buzo!";
    }

    if (clima.temp > 20 && clima.temp < 30) {
      return "hoy esta lindo para andar de remerita y una buena gaseosa fría!";
    }

    if (clima.temp >= 30) {
      return "no se diga mas!, A armar esa pelopincho!";
    }
  };

  return (
    <>
      {mostrarDatos ? (
        <>
          <p>
            <i class="far fa-flag"></i> País: {clima.country}
          </p>
          <p>
            <i class="far fa-building"></i> Ciudad: {clima.city}
          </p>
          <p>
            <i class="fas fa-thermometer-half"></i> Temperatura: {clima.temp} °C
          </p>
          <p>
            <i class="fas fa-temperature-high"></i> Temperatura Máxima:{" "}
            {clima.temp_max} °C
          </p>
          <p>
            <i class="fas fa-temperature-low"></i> Temperatura Mínima:{" "} 
            {clima.temp_min} °C
          </p>

          <div>
            <p className="info">
              En la ciudad de {clima.city} hay una temperatura equivalente a {""}
              {clima.temp}, con una maxima de {""}
              {clima.temp_max} y una minima de {""} {clima.temp_min}.{" "}
              {climaInfo()}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default DatosClima;
