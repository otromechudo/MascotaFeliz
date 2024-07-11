import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login/login";
import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/Home";
import AgregarFamilia from "./components/AgregarFamilia/AgregarFamilia";
import Familia from "./components/Familia/Familia";
import AgregarMascota from "./components/AgregarMascota/AgregarMascota";
import Mascota from "./components/Mascota/Mascota";
import "./App.css";

function App() {
  const [access, setAccess] = useState(false);
  const [veterinario, setVeterinario] = useState({
    idVeterinario: "",
    nombre: "",
    direccion: "",
    telefono: "",
    cc: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  function ProtectedRoute({ element, ...rest }) {
    if (access) {
      return <Route {...rest} element={element} />;
    } else {
      navigate("/"); // Redireccionar al usuario a la página de inicio de sesión si no está autenticado
      return null;
    }
  }
  useEffect(() => {
    // Verificar si hay datos de veterinario almacenados en el almacenamiento local al cargar la aplicación
    const storedVeterinario = localStorage.getItem("veterinario");
    if (storedVeterinario) {
      setVeterinario(JSON.parse(storedVeterinario));
      setAccess(true);
    }
  }, []);

  function GetVeterinario(idVeterinario) {
    return fetch(`http://localhost:3001/veterinario/${idVeterinario}`).then(
      (response) => response.json()
    );
  }

  function login(userData) {
    fetch(`http://localhost:3001/veterinarios`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const userExists = data.find(
            (user) => String(user.cc) === String(userData.cc)
          );

          if (userExists && userExists.password === userData.password) {
            window.alert("¡Bienvenido!");
            setVeterinario(userExists);
            setAccess(true);

            // Guardar los datos del veterinario en el almacenamiento local
            localStorage.setItem("veterinario", JSON.stringify(userExists));

            navigate(`/home/${userExists.idVeterinario}`);
          } else {
            window.alert("¡Contraseña y/o usuario incorrecta!");
          }
        } else {
          window.alert("Error en traer los datos");
        }
      });
  }

  function logout() {
    setAccess(false);
    setVeterinario({
      idVeterinario: "",
      nombre: "",
      direccion: "",
      telefono: "",
      cc: "",
      password: "",
    });
    // Limpiar los datos del veterinario del almacenamiento local al cerrar sesión
    localStorage.removeItem("veterinario");
    navigate("/");
  }

  function postFamilia(data) {
    const postData = { ...data, idVeterinario: veterinario.idVeterinario };
    fetch("http://localhost:3001/familia", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(postData), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");

        // Asegurarse de que data.idFamilia exista antes de navegar
        if (data.idFamilia) {
          navigate(`/familia/${data.idFamilia}`);
        } else {
          console.error("idFamilia no encontrado en la respuesta");
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }

  function postCliente(data) {
    fetch("http://localhost:3001/cliente", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(data), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");

        // Asegurarse de que data.idFamilia exista antes de navegar
        if (data.idFamilia) {
          navigate(`/familia/${data.idFamilia}`);
        } else {
          console.error("idFamilia no encontrado en la respuesta");
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }

  function postMascota(data) {
    console.log(data);
    fetch("http://localhost:3001/mascota", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(data), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");

        // Asegurarse de que data.idFamilia exista antes de navegar
        if (data.idFamilia) {
          navigate(`/familia/${data.idFamilia}`);
        } else {
          console.error("idFamilia no encontrado en la respuesta");
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }

  function getClientes(idFamilia) {
    return fetch(`http://localhost:3001/cliente/${idFamilia}`).then(
      (response) => response.json()
    );
  }

  function getMascotas(idFamilia) {
    return fetch(`http://localhost:3001/mascota/familia/${idFamilia}`).then(
      (response) => response.json()
    );
  }

  function getFamilia(idFamilia) {
    return fetch(`http://localhost:3001/familia/${idFamilia}`).then(
      (response) => response.json()
    );
  }

  function getFamiliasByVeterinario(idVeterinario) {
    if (veterinario) {
      return fetch(
        `http://localhost:3001/familia/veterinario/${idVeterinario}`
      ).then((response) => response.json());
    }
  }

  function getMascota(idMascota) {
    return fetch(`http://localhost:3001/mascota/${idMascota}`).then(
      (response) => response.json()
    );
  }
  function getPeso(idMascota) {
    return fetch(`http://localhost:3001/peso/${idMascota}`).then((response) =>
      response.json()
    );
  }
  function getVacunas(idMascota) {
    return fetch(`http://localhost:3001/vacuna/${idMascota}`).then((response) =>
      response.json()
    );
  }
  function getHistoriaClinica(idMascota) {
    return fetch(`http://localhost:3001/historiaclinica/${idMascota}`).then(
      (response) => response.json()
    );
  }
  function postPeso(data) {
    fetch("http://localhost:3001/peso", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(data), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }
  function postVacuna(data) {
    fetch("http://localhost:3001/vacuna", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(data), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }
  function postHistoriaClinica(data) {
    fetch("http://localhost:3001/historiaclinica", {
      method: "POST", // Especificar el método HTTP
      headers: {
        "Content-Type": "application/json", // Especificar el tipo de contenido
      },
      body: JSON.stringify(data), // Convertir el objeto data a JSON
    })
      .then((response) => {
        if (!response.ok) {
          // Manejar el caso en el que la respuesta no es exitosa
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then((data) => {
        console.log("Success:", data); // Manejar la respuesta exitosa
        window.alert("Guardado");
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar cualquier error
      });
  }

  return (
    <div className="App">
      <div className="nav">
        {access && location.pathname !== "/" && (
          <NavBar logout={logout} veterinario={veterinario} />
        )}
      </div>
      <Routes>
        {!access ? (
          <Route path="/" element={<Login login={login} />} />
        ) : (
          <>
            <Route
              path="/home/:idVeterinario"
              element={
                <Home
                  getFamiliasByVeterinario={getFamiliasByVeterinario}
                  GetVeterinario={GetVeterinario}
                />
              }
            />
            <Route
              path="/agregarfamilia"
              element={<AgregarFamilia postFamilia={postFamilia} />}
            />
            <Route
              path="/familia/:idFamilia"
              element={
                <Familia
                  getClientes={getClientes}
                  getMascotas={getMascotas}
                  getFamilia={getFamilia}
                  postCliente={postCliente}
                />
              }
            />
            <Route
              path="/agregarmascota/:idFamilia"
              element={<AgregarMascota postMascota={postMascota} />}
            />
            <Route
              path="/Mascota/:idMascota"
              element={
                <Mascota
                  getMascota={getMascota}
                  getPeso={getPeso}
                  getVacunas={getVacunas}
                  getHistoriaClinica={getHistoriaClinica}
                  postVacuna={postVacuna}
                  postHistoriaClinica={postHistoriaClinica}
                  postPeso={postPeso}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
