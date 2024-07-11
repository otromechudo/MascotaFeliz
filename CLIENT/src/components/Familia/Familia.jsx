import React, { useState, useEffect } from "react";
import styles from "./Familia.module.css";
import { useParams, Link } from "react-router-dom";

export default function Familias(props) {
  const { idFamilia } = useParams();

  // Define los estados para almacenar los datos
  const [clientes, setClientes] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [familia, setFamilia] = useState(null);

  useEffect(() => {
    props.getClientes(idFamilia).then(setClientes);
    props.getMascotas(idFamilia).then(setMascotas);
    props.getFamilia(idFamilia).then(setFamilia);
  }, [idFamilia, props]); // Dependencia para que solo se ejecute cuando idFamilia cambie

  const [cliente, setCliente] = useState({
    nombre: "",
    cc: "",
    telefono: "",
  });

  function handleClienteChange(e) {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitCliente(e) {
    e.preventDefault();
    const postData = {
      ...cliente,
      cuentaBancaria: familia.cuentaBancaria,
      direccion: familia.direccion,
      idFamilia: familia.idFamilia,
    };
    props.postCliente(postData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Clientes</h2>
        <ul>
          {clientes
            ? clientes.map((cliente) => (
                <li key={cliente.idCliente}>{cliente.nombre}</li>
              ))
            : "Cargando..."}
        </ul>
        <form onSubmit={handleSubmitCliente}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del cliente"
            value={cliente.nombre}
            onChange={handleClienteChange}
          />
          <input
            type="text"
            name="cc"
            placeholder="Identificación del cliente"
            value={cliente.cc}
            onChange={handleClienteChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono del cliente" // Nuevo campo
            value={cliente.telefono}
            onChange={handleClienteChange}
          />
          <button type="submit">Agregar cliente</button>
        </form>
      </div>

      <div className={styles.column}>
        <h2>
          Número de cuenta bancaria{" "}
          {familia ? familia.cuentaBancaria : "Cargando..."}
        </h2>
        <h2>Dirección {familia ? familia.direccion : "Cargando..."}</h2>
      </div>

      <div className={styles.column}>
        <h2>Mascotas</h2>
        <ul>
          {mascotas
            ? mascotas.map((mascota) => (
                <Link
                  key={mascota.idMascota}
                  to={`/mascota/${mascota.idMascota}`}
                >
                  <li key={mascota.idMascota}>{mascota.nombre}</li>
                </Link>
              ))
            : "Cargando..."}
        </ul>
        <Link to={`/agregarmascota/${idFamilia}`}>
          <button type="submit">Agregar Mascota</button>
        </Link>
      </div>
    </div>
  );
}
