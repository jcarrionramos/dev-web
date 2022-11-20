import React, { useState } from "react";
import { signUpApi } from "../../api/services";
import { setCookie } from "../../helpers/cookies";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const onChangeForm = (data) => {
    const type = data.target.type;
    const value = data.target.value;

    setFormData({ ...formData, [type]: value });
  };

  const signUp = () => {
    signUpApi(formData.email, formData.password).then((data) => {
      if (data.success) {
        setCookie(process.env.REACT_APP_JWT_KEY, data.jwt);
        return navigate("/home");
      }
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div className={styles.formContent}>
          <h3 className={styles.formTitle}>Bienvenido!</h3>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              className="form-control mt-1"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              onChange={(data) => onChangeForm(data)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Constraseña</label>
            <input
              className="form-control mt-1"
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(data) => onChangeForm(data)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={signUp} className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
