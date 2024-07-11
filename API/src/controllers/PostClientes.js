const { Cliente } = require("../db");
const axios = require("axios");

const PostClientes = async function (req, res) {

  const {
    nombre,
    cuentaBancaria,
    direccion,
    telefono,
    cc,
    idFamilia,
  } = req.body;
  try {
    const clientes= await Cliente.findAll({});
    const idCliente = clientes.length > 0 ? clientes.length + 1 : 1;
    if (
      idCliente ||
      nombre ||
      cuentaBancaria ||
      direccion ||
      telefono ||
      cc ||
      idFamilia
    ) {
      const newCliente = await Cliente.create({
        idCliente,
        nombre,
        cuentaBancaria,
        direccion,
        telefono,
        cc,
        idFamilia,
      });
      res.status(201).json(newCliente);
    } else {
      res.status(500).json("data is missing");
    }
  } catch (error) {
    console.error("Error al crear el cliente:", error.message);
    res.status(500).json({ error: "Error interno del servidor", error });
  }
};
module.exports = PostClientes;
