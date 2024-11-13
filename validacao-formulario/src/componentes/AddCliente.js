import React from "react";
import { Formik } from "formik";
import "./AddCliente.css"


const AddCliente = () => {
  return (
    <>
     <h1>Clientes</h1>
      <Formik
        initialValues={{ nome: "", email: "", data: "" }}
        validate={(values2) => {
          const errors = {};
          if (!values2.nome) {
            errors.nome = "Preencha o campo nome !";
          }
          if (!values2.email) {
            errors.email = "email não pode ficar vazio!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-09.=]+\.[A-Z]{2,}$/i.test(values2.email)
          ) {
            errors.email = "Email invalido!";
          }
          if (!values2.data) {
            errors.data = "Data precisas ser preechido!";
          }
          return errors;
        }}
        onSubmit={(values1) => {
          alert(JSON.stringify(values1));
        }}
      >
        {(propsFormik) => (
          <form onSubmit={propsFormik.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                onChange={propsFormik.handleChange}
                onBlur={propsFormik.handleBlur}
              ></input>
              {propsFormik.errors.nome && propsFormik.touched.nome ? (
                <div>{propsFormik.errors.nome}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={propsFormik.handleChange}
                onBlur={propsFormik.handleBlur}
              ></input>
              {propsFormik.errors.email && propsFormik.touched.email ? (
                <div>{propsFormik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Data Nascimento:</label>
              <input
                type="date"
                id="data"
                name="data"
                onChange={propsFormik.handleChange}
                onBlur={propsFormik.handleBlur}
              ></input>
              {propsFormik.errors.data && propsFormik.touched.data ? (
                <div>{propsFormik.errors.data}</div>
              ) : null}
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddCliente;