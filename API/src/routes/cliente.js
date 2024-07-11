const express = require("express");
const router = express.Router();
const GetClientes = require("../controllers/GetClientes.js");
const PostClientes= require("../controllers/PostClientes.js")


router.get("/:idFamilia", GetClientes);
router.post("/", PostClientes)


module.exports = router;