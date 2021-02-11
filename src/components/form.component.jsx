import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <html>
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <center>
          <p> --- Météo du Jour --- </p>
        <div className="row">
        <p> Ville:  <input type="text" className="form-control" placeholder="City" name="city" /> </p>
        <p> Pays :  <input type="text" className="form-control" placeholder="Country" name="country" /> </p>
            <button className="btn btn-warning"> Obtenir le temps</button>
        </div>
        </center>
        <hr></hr>
      </form>
    </div>
    </html>
  );
};



export default Form;