const { Veterinario } = require("../db");

const  GetVeterinario = async function (req, res) {
  try {
    const idVeterinario= req.params.idVeterinario
    const dataBD = await Veterinario.findAll({where:{idVeterinario: idVeterinario}});
    const result = dataBD[0];
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetVeterinario;