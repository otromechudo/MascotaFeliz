const { Peso } = require("../db");

const PostPeso = async function (req, res) {
  const { peso, idMascota, fechaRegistro } = req.body;
  try {
    const pesos= await Peso.findAll({});
    const idPeso = pesos.length > 0 ? pesos.length + 1 : 1;
    if (idMascota || peso) {
      const newPeso = await Peso.create({
        idPeso,
        idMascota,
        peso,
        fechaRegistro,
      });
      res.status(201).json(newPeso);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (error) {
    console.error("Error al crear el peso:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};
module.exports = PostPeso;
