import React, { useState } from "react";
import fondo from "../../img/fondo_1.jpg";
import styles from "./AgregarFamilia.module.css";

export default function AgregarFamilia(props) {
  const [familiaData, setFamiliaData] = useState({
    nombre: "",
    cuentaBancaria: "",
    direccion: "",
    telefono: "",
  });

  function handleInputChange(e) {
    setFamiliaData({
      ...familiaData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.postFamilia(familiaData);
  }

  return (
    <div className={styles.body}>
      <div className={styles.login}>
        <div className={styles.content}>
          <div className={styles.Titulo}>
            <h1>Agregar Familia</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
        >
          <div className={styles.container}>
            <div className={styles.form_group}>
              <label>Nombre</label>
              <input
                className={styles.warning}
                type="text"
                name="nombre"
                placeholder="Ingrese nombre"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Ingrese cuenta bancaria</label>
              <input
                type="text"
                name="cuentaBancaria"
                placeholder="Ingrese cuenta bancaria"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Ingrese un número teléfono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Ingrese un número teléfono"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Ingrese una dirección</label>
              <input
                type="text"
                name="direccion"
                placeholder="Ingrese una dirección"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

