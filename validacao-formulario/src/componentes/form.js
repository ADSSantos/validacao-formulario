import React from "react";
import { Formik } from "formik";

const AddCliente = () => {
  return (
    <>
      <h1>Cadastro</h1>
      <Formik
        initialValues={{ nome: "", email: "", data: "" }}
        onSubmit={(galinhaPintadinha) => {
          console.log(galinhaPintadinha);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                onChange={props.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={props.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label>Data Nascimento:</label>
              <input
                type="date"
                id="data"
                name="data"
                onChange={props.handleChange}
              ></input>
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddCliente;
