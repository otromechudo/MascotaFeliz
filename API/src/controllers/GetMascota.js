const { Mascota } = require("../db");

const  GetMascota = async function (req, res) {
  try {
    const idMascota= req.params.idMascota
    const dataBD = await Mascota.findAll({where:{idMascota: idMascota}});
    const result = dataBD[0];
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetMascota;