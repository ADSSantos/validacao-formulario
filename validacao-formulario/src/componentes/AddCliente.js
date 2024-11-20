import React from "react";
import { Formik, Field } from "formik";
import "./AddCliente.css"


const AddCliente = () => {
  return (
    <>
     <h1 className="h1">Clientes</h1>
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
          <form className="formulario" onSubmit={propsFormik.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Field className="inputs"
                type="text"
                id="nome"
                name="nome"
                //onChange={propsFormik.handleChange}
                //onBlur={propsFormik.handleBlur}
              ></Field>
              {propsFormik.errors.nome && propsFormik.touched.nome ? (
                <div className="error">{propsFormik.errors.nome}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field className="inputs"
                type="text"
                id="email"
                name="email"
                //onChange={propsFormik.handleChange}
                //onBlur={propsFormik.handleBlur}
              ></Field>
              {propsFormik.errors.email && propsFormik.touched.email ? (
                <div className="error">{propsFormik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Data Nascimento</label>
              <Field className="inputs"
                type="date"
                id="data"
                name="data"
                //onChange={propsFormik.handleChange}
                //onBlur={propsFormik.handleBlur}
              ></Field>
              {propsFormik.errors.data && propsFormik.touched.data ? (
                <div className="error">{propsFormik.errors.data}</div>
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