import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  console.log(props);
  return (
    <div className={styles.nav}>
      <div className={styles.Titulo}>
        <h1>Hola, Doc</h1>
      </div>
      <div className={styles.bttn}>
        <Link to={`/home/${props.veterinario.idVeterinario}`}>
          <button>Inicio</button>
        </Link>
      </div>
      <div className={styles.bttn}>
        <Link to="/">
          <button onClick={props.logout}>Log Out</button>
        </Link>
      </div>
    </div>
  );
}
