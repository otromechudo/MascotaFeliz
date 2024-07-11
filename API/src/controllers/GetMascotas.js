const { Mascota } = require("../db");

const  GetMascotas = async function (req, res) {
  try {
    const idFamilia= req.params.idFamilia
    const dataBD = await Mascota.findAll({where: { idFamilia: idFamilia }});
    const result = dataBD;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetMascotas;