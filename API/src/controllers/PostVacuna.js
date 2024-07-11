const { Vacuna } = require("../db");

const PostVacuna = async function (req, res) {
  const { vacuna, idMascota, fechaRegistro } = req.body;
  try {
    const vacunas= await Vacuna.findAll({});
    const idVacuna = vacunas.length > 0 ? vacunas.length + 1 : 1;
    if (idMascota || vacuna) {
      const newVacuna = await Vacuna.create({
        idVacuna,
        idMascota,
        vacuna,
        fechaRegistro,
      });
      res.status(201).json(newVacuna);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (error) {
    console.error("Error al crear el vacuna:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};
module.exports = PostVacuna;