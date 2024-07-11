const { Cliente } = require("../db");

const  GetClientes = async function (req, res) {
  try {
    const idFamilia= req.params.idFamilia
    const dataBD = await Cliente.findAll({where:{idFamilia: idFamilia}});
    const result = dataBD;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetClientes;