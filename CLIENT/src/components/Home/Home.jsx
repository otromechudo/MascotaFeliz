import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home(props) {
  const { idVeterinario } = useParams();
  const [search, setSearch] = useState({
    mascota: "",
    identificacion: "",
  });
  const [familias, setFamilias] = useState([]);

  useEffect(() => {
    props.getFamiliasByVeterinario(idVeterinario).then(setFamilias);
  }, []);

  function handleInputChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={styles.body}>
      <div className={styles.familias}>
        <h2>Familias</h2>
        <ul>
          {familias ? (
            familias.map((familia) => (
              <Link
                key={familia.idFamilia}
                to={`/familia/${familia.idFamilia}`}
              >
                <li>{familia.nombre}</li>
              </Link>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </ul>
      </div>
      <div className={styles.boton}>
        <Link to="/agregarfamilia">
          <button type="submit">Agregar Familia</button>
        </Link>
      </div>
    </div>
  );
}
