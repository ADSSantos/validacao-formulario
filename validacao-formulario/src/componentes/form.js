import React from "react";
import { Formik } from "formik";

const AddCliente = () => {
  return (
    <>
      <h1>Teste</h1>
      <Formik>
        <form noValidate>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome"></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"></input>
          </div>
          <div className="form-group">
            <label>Data Nascimento:</label>
            <input type="date" id="data" name="data"></input>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </Formik>
    </>
  );
};

export default AddCliente;
