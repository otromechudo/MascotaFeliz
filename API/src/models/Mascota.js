const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("mascota", {
    idMascota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    especie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    raza: {
      type: DataTypes.STRING,
      allowNull:false
    },
    colorPelo:{
      type: DataTypes.STRING,
      allowNull:false
    },
    fechaNacimiento:{
      type:DataTypes.DATEONLY,
      allowNull:true,
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