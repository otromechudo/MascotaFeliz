const { Vacuna } = require("../db");

const GetVacunas = async function (req, res) {
  try {
    const idMascota= req.params.idMascota
    
    // Verificar si se proporcionó un idMascota
    if (!idMascota) {
      return res.status(400).json({ error: "idMascota is required" });
    }

    // Buscar registros en la base de datos con el idMascota proporcionado
    const dataBD = await Vacuna.findAll({
      where: { idMascota: idMascota }
    });

    res.status(201).json(dataBD);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetVacunas;