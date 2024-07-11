import React, { useState } from "react";
import fondo from "../../img/fondo_1.jpg"
import styles from "./login.module.css";

export default function Login(props) {
  const [userData, setUserData] = useState({
    cc: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }
  return (
    <div className={styles.body}>
       <div className={styles.Login}>
        <img className={styles.Imagen} src={fondo} alt="fondo"></img>
      </div>
      <div className={styles.login}>
        <div className={styles.content}>
          <div className={styles.Titulo}>
            <h1>La Mascota Feliz</h1>
          </div>
        </div>
        <div className={styles.form}>
          <h1>Iniciar Sesión</h1>
        </div>
        <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.container}>
          <div className={styles.form_group}>
            <label>Cédula </label>
            <input
              className={styles.warning}
              type="text"
              name="cc"
              placerholder="Enter username"
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
          <div className={styles.form_group}>
            <label>Contraseña</label>
            <input
              type="text"
              name="password"
              placerholder="Enter password"
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
      </div>

    </div>
  );
}