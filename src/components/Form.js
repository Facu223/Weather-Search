import React from "react";

const Form = (props) => {

  return (
    <>
      <div>
        <h1>Weather Search</h1>
        <form onSubmit={props.traerClima}>
          <div>
            <label>Ciudad : </label> <br/>
            <input type="text" name="ciudad" class="form-control"/>
          </div>
          <div>
            <label>País de la ciudad : </label> <br/>
            <input type="text" name="pais" class="form-control" />
            <div>
              <button type="submit">Buscar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
