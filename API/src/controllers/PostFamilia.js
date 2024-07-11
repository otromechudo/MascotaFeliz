const { Familia } = require("../db");
const axios = require("axios");

const PostFamilia = async function (req, res) {
  const { idVeterinario, nombre, cuentaBancaria, direccion, telefono } =
    req.body;

  // Verifica que todos los campos necesarios estén presentes
  if (!nombre || !cuentaBancaria || !direccion || !telefono || !idVeterinario) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  try {
    const familias= await Familia.findAll({});
    const idFamilia = familias.length > 0 ? familias.length + 1 : 1;
    const newFamilia = await Familia.create({
      idVeterinario,
      idFamilia,
      nombre,
      cuentaBancaria,
      direccion,
      telefono,
    });

    res.status(201).json(newFamilia);
  } catch (error) {
    console.error("Error al crear la familia:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};

module.exports = PostFamilia;
