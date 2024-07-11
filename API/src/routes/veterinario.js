const express = require("express");
const router = express.Router();
const GetVeterinarios = require("../controllers/GetVeterinarios.js");
const GetVeterinario=require("../controllers/GetVeterinario.js")


router.get("/", GetVeterinarios);
router.get("/idVeterinario",)

module.exports = router;
