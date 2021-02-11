import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <html>
      <form onSubmit={props.loadweather}>
        <center>
          <p> --- Météo du Jour --- </p>
        <div className="row">
        <p> Ville:  <input type="text" className="form-control" placeholder="Ville" name="city" /> </p>
        <p> Pays :  <input type="text" className="form-control" placeholder="Pays" name="country" /> </p>
            <button className="btn btn-warning"> Obtenir le temps</button>
        </div>
        </center>
      </form>
    </html>
  );
};



export default Form;