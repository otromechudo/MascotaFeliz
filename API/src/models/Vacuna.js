const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("vacuna", {
    idVacuna: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    vacuna: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    idMascota:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:"mascota",
        key:"idMascota"
      }
    }
  });

};