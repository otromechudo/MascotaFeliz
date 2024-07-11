import React, { useState } from "react";
import styles from "./AgregarMascota.module.css";
import { useParams } from "react-router-dom";

export default function AgregarMascota(props) {
  const { idFamilia } = useParams();
  const [mascotaData, setMascotaData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    colorPelo: "",
    fechaNacimiento: "",
  });

  function handleInputChange(e) {
    setMascotaData({
      ...mascotaData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data ={...mascotaData, idFamilia}
    props.postMascota(data);
  }

  return (
    <div className={styles.body}>
      <div className={styles.login}>
        <div className={styles.content}>
          <div className={styles.Titulo}>
            <h1>Agregar Mascota</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese nombre"
                onChange={handleInputChange}
              />
            </div>
          <div className={styles.container}>
            <div className={styles.form_group}>
              <label>Especie</label>
              <input
                className={styles.warning}
                type="text"
                name="especie"
                placeholder="Ingrese especie"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Raza</label>
              <input
                type="text"
                name="raza"
                placeholder="Ingrese raza"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Color de pelo</label>
              <input
                type="text"
                name="colorPelo"
                placeholder="Ingrese color de pelo"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.form_group}>
              <label>Fecha de nacimiento</label>
              <input
                type="date"
                name="fechaNacimiento"
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
