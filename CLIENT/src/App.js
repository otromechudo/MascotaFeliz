import fondo from "./img/fondo_1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Fondo">
        <img className="Imagen" src={fondo} alt="fondo"></img>
      </div>
      <div className="login">
        <div className="content">
          <div className="Titulo">
            <h1>La Mascota Feliz</h1>
          </div>
          <div className='form'>
          <input
            onChange={(e) => handleInputChange(e)}
            className={errors.life ? styles.warningNumber : styles.number}
            type="number"
            placeholder="MAX"
            min="1"
            max="200"
            value={dogData.maxLife}
            name="maxLife"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
