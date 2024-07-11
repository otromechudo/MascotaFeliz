const { Familia } = require("../db");

const  GetFamiliaByVeterinario = async function (req, res) {
  try {
    const idVeterinario= req.params.idVeterinario
    const dataBD = await Familia.findAll({where:{idVeterinario: idVeterinario}});
    const result = dataBD;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetFamiliaByVeterinario;