import React from "react";
import { useField } from "formik";
import "./Campo.css";

// useField retorna [field, meta], que são necessários para o funcionamento correto
const Campo = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  return (
    <div  className="form-group">
        <label htmlFor="props.id">{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "is-invalid" : ""}
      />
      {meta.error && meta.touched ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Campo;
