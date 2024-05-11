const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("peso", {
    idPeso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    peso: {
      type: DataTypes.DECIMAL,
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
