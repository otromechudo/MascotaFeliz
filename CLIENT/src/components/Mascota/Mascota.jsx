import React, { useState, useEffect } from "react";
import styles from "./Mascota.module.css";
import { useParams, Link } from "react-router-dom";

export default function Mascota(props) {
  const { idMascota } = useParams();

  // Define los estados para almacenar los datos
  const [mascota, setMascota] = useState(null);
  const [historiaClinica, setHistoriaClinica] = useState([]);
  const [vacunas, setVacunas] = useState([]);
  const [pesos, setPesos] = useState([]);

  useEffect(() => {
    props.getMascota(idMascota).then(setMascota);
    props.getHistoriaClinica(idMascota).then(setHistoriaClinica);
    props.getVacunas(idMascota).then(setVacunas);
    props.getPeso(idMascota).then(setPesos);
  }, [idMascota, props]);

  // Obtener la fecha actual en formato YYYY-MM-DD
  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
  };
  const sortedPesos = [...pesos].sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro));
  const last5Pesos = sortedPesos.slice(0, 5);
  const pesoActual = sortedPesos[0]?.peso || "No registrado";
  const pesoPromedio = pesos.length > 0 
  ? (pesos.reduce((sum, registro) => sum + Number(registro.peso), 0) / pesos.length).toFixed(2)
  : "No registrado";

  // Manejo del formulario de agregar historia clínica
  const [historia, setHistoria] = useState({
    fechaRegistro: getCurrentDate(),
    historia: ""
  });

  function handleHistoriaChange(e) {
    setHistoria({
      ...historia,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitHistoria(e) {
    e.preventDefault();
    const postData = {
      ...historia,
      idMascota: mascota.idMascota,
      fechaRegistro: getCurrentDate()
    };
    props.postHistoriaClinica(postData);
  }

  // Manejo del formulario de agregar vacuna
  const [vacuna, setVacuna] = useState({
    vacuna: "",
    fechaRegistro: getCurrentDate()
  });

  function handleVacunaChange(e) {
    setVacuna({
      ...vacuna,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitVacuna(e) {
    e.preventDefault();
    const postData = {
      ...vacuna,
      idMascota: mascota.idMascota,
      fechaRegistro: getCurrentDate()
    };
    console.log(postData)
    props.postVacuna(postData);
  }

  // Manejo del formulario de agregar peso
  const [peso, setPeso] = useState({
    fechaRegistro: getCurrentDate(),
    peso: ""
  });

  function handlePesoChange(e) {
    setPeso({
      ...peso,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitPeso(e) {
    e.preventDefault();
    const postData = {
      ...peso,
      idMascota: mascota.idMascota,
      fechaRegistro: getCurrentDate()
    };
    props.postPeso(postData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Información de la Mascota</h2>
        {mascota ? (
          <ul>
            <li>ID: {mascota.idMascota}</li>
            <li>Nombre: {mascota.nombre}</li>
            <li>Raza: {mascota.raza}</li>
            <li>Color de Pelo: {mascota.colorPelo}</li>
            <li>Fecha de Nacimiento: {mascota.fechaNacimiento}</li>
          </ul>
        ) : "Cargando..."}
      </div>

      <div className={styles.column}>
        <h2>Historia Clínica</h2>
        <ul>
          {historiaClinica.length > 0
            ? historiaClinica.map((entry) => (
                <li key={entry.idHistoria}>
                  {entry.fechaRegistro}: {entry.historia}
                </li>
              ))
            : "No hay historia clínica registrada."}
        </ul>
        <form onSubmit={handleSubmitHistoria}>
          <textarea
            name="historia"
            placeholder="historia"
            value={historia.historia}
            onChange={handleHistoriaChange}
          />
          <button type="submit">Agregar Historia Clínica</button>
        </form>
      </div>

      <div className={styles.column}>
        <h2>Vacunas</h2>
        <ul>
          {vacunas.length > 0
            ? vacunas.map((vacuna) => (
                <li key={vacuna.idVacuna}>
                  {vacuna.fechaRegistro}: {vacuna.vacuna}
                </li>
              ))
            : "No hay vacunas registradas."}
        </ul>
        <form onSubmit={handleSubmitVacuna}>
          <input
            type="text"
            name="vacuna"
            placeholder="Nombre de la vacuna"
            value={vacuna.vacuna}
            onChange={handleVacunaChange}
          />
          <button type="submit">Agregar Vacuna</button>
        </form>
      </div>

      <div className={styles.column}>
        <h2>Pesos</h2>
        <p>Peso actual: {pesoActual} kg</p>
        <p>Peso promedio: {pesoPromedio} kg</p>
        <h3>Últimos 5 Pesos</h3>
        <ul>
          {last5Pesos.length > 0
            ? last5Pesos.map((peso) => (
                <li key={peso.idPeso}>
                  {peso.fechaRegistro}: {peso.peso} kg
                </li>
              ))
            : "No hay pesos registrados."}
        </ul>
        <form onSubmit={handleSubmitPeso}>
          <input
            type="number"
            name="peso"
            placeholder="Peso (kg)"
            value={peso.peso}
            onChange={handlePesoChange}
          />
          <button type="submit">Agregar Peso</button>
        </form>
      </div>

      {/* <div className={styles.column}>
        <Link to={`/verhistoriaclinica/${idMascota}`}>
          <button type="button">Ver Historia Clínica Completa</button>
        </Link>
        <Link to={`/vervacunas/${idMascota}`}>
          <button type="button">Ver Vacunas</button>
        </Link>
        <Link to={`/verpesos/${idMascota}`}>
          <button type="button">Ver Pesos</button>
        </Link>
      </div> */}
    </div>
  );
}
