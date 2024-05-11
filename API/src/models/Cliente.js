const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cliente", {
    idCliente: {
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
    cc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idFamilia:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:"familia",
        key:"idFamilia"
      }
    }
  });

};
