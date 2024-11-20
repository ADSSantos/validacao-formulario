import React from "react";
import { Formik } from "formik";
import "./AddCliente.css";
import Campo from "./Campo";
import "./Campo.css";

const AddCliente = () => {
  return (
    <>
      <h1 className="h1">Validação Formulario</h1>
      <Formik
        initialValues={{ nome: "", email: "", data: "" }}
        validate={(values2) => {
          const errors = {};
          if (!values2.nome) {
            errors.nome = "Preencha o campo Nome";
          }
          if (!values2.email) {
            errors.email = "Preencha o campo Email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-09.=]+\.[A-Z]{2,}$/i.test(values2.email)
          ) {
            errors.email = "Email invalido!";
          }
          if (!values2.data) {
            errors.data = "Preencha o campo Data";
          }

          
          return errors;
        }}
        onSubmit={(values1) => {
          alert(JSON.stringify(values1));
        }}
      >
        {(propsFormik) => (
          <form
            className="formulario"
            onSubmit={propsFormik.handleSubmit}
            noValidate
          >
            <Campo
              type="text"
              id="nome"
              name="nome"
              label="Nome"
              //onChange={propsFormik.handleChange}
              //onBlur={propsFormik.handleBlur}
              //com o uso do componente field não precisamos de fazer o bind das entradas
            ></Campo>

            <Campo
              type="text"
              id="email"
              name="email"
              label="Email"
              //onChange={propsFormik.handleChange}
              //onBlur={propsFormik.handleBlur}
            ></Campo>

            <Campo
              type="date"
              id="data"
              name="data"
              label="Data Nascimento"
              //onChange={propsFormik.handleChange}
              //onBlur={propsFormik.handleBlur}
            ></Campo>

            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddCliente;
