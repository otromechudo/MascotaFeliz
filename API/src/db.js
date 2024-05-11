require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const _Cliente = require("./models/Cliente");
const _Familia = require("./models/Familia");
const _HistoriaClinica = require("./models/HistoriaClinica");
const _Mascota = require("./models/Mascota");
const _Peso = require("./models/Peso");
const _Vacuna = require("./models/Vacuna");
const _Veterinario = require("./models/Veterinario");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false,
    define: {
      timestamps: false // Desactivar el uso de campos de timestamp createdAt y updatedAt
    }
  }
);
const basename = path.basename(__filename);

const modelDefiners = [_Cliente, _Familia,_HistoriaClinica,_Mascota,_Peso,_Vacuna,_Veterinario];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Cliente, Familia,HistoriaClinica,Mascota,Peso,Vacuna,Veterinario} = sequelize.models;
console.log('-->',sequelize.models)
// Aca vendrian las relaciones
Veterinario.hasMany(Familia);
Familia.hasMany(Cliente)
Familia.hasMany(Mascota)
Mascota.hasMany(Peso)
Mascota.hasMany(Vacuna)
Mascota.hasMany(HistoriaClinica)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op
};
