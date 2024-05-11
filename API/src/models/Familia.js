const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("familia", {
    idFamilia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuentaBancaria: {
      type: DataTypes.INTEGER,
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
    idVeterinario:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:"veterinarios",
        key:"idVeterinario"
      }
    }
  });
};
