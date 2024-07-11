const { Veterinario } = require("../db");

const  GetVeterinarios = async function (req, res) {
  try {

    const dataBD = await Veterinario.findAll({});
    const result = dataBD;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetVeterinarios;
