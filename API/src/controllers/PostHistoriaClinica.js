const { HistoriaClinica } = require("../db");

const postHistoriaClinica = async function (req, res) {
  const { historia, idMascota, fechaRegistro } = req.body;
  try {
    const historias= await HistoriaClinica.findAll({});
    const idHistoria = historias.length > 0 ? historias.length + 1 : 1;
    if (idMascota || peso) {
      const newHistoria = await HistoriaClinica.create({
        idHistoria,
        idMascota,
        historia,
        fechaRegistro,
      });
      res.status(201).json(newHistoria);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (error) {
    console.error("Error al crear el historia:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};
module.exports = postHistoriaClinica;