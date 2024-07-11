const { Familia } = require("../db");

const  GetFamilia = async function (req, res) {
  try {
    const idFamilia= req.params.idFamilia
    const dataBD = await Familia.findAll({where:{idFamilia: idFamilia}});
    const result = dataBD[0];
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetFamilia;