import React from "react";
import { Formik } from "formik";
import "./AddCliente.css";
import Campo from "./Campo";
import Validacao from "./Validacao";

const AddCliente = () => {
  return (
    <>
      <h1 className="h1">Validação Formulario</h1>
      <Formik
        initialValues={{ nome: "", email: "", data: "" }}
        validationSchema={Validacao}
        onSubmit={(values1) => {
          alert(JSON.stringify(values1));
        }}
      >
        {(propsFormik) => (
          <form
            className="formulario"
            onSubmit={propsFormik.handleSubmit}
            noValidate
            autoComplete="new-password"
            
          >
            <Campo
              type="text"
              id="nome"
              name="nome"
              label="Nome"
              autoComplete="new-password"
              //onChange={propsFormik.handleChange}
              //onBlur={propsFormik.handleBlur}
              //com o uso do componente field não precisamos de fazer o bind das entradas
            ></Campo>

            <Campo
              type="text"
              id="email"
              name="email"
              label="Email"
              autoComplete="new-password"
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
