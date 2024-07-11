const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("veterinario", {
    idVeterinario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  });
};
