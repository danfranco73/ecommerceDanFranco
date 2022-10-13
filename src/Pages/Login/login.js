import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log("Form submitted");
    };
    

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Completar email";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Clave requerida";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [ formErrors, isSubmitting]);

  return (
    <div className="form-box">
      <h1>Entra a tu cuenta</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span>Bienvenido</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input
          className="form-control"
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
          className="form-control"
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <button type="submit">Entrar</button>
        <button type="submit" >Salir</button>
      </form>
    </div>
  );
};

export default Login;