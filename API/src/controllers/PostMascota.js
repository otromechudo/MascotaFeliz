const { Mascota } = require("../db");
const axios = require("axios");

const PostMascota = async function (req, res) {
  const {nombre, especie, raza, colorPelo, fechaNacimiento, idFamilia} = req.body;
  try {
    const Mascotas = await Mascota.findAll({})
    const idMascota = Mascotas.length > 0 ? Mascotas.length + 1 : 1;
    if (idMascota || nombre || especie || raza || colorPelo || fechaNacimiento||idFamilia) {
      const newMascota = await Mascota.create({
        idMascota,nombre, especie, raza, colorPelo, fechaNacimiento, idFamilia
      });
      res.status(201).json(newMascota);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (error) {
    console.error("Error al crear el cliente:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};
module.exports = PostMascota;