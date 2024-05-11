const express = require("express");
const router = express.Router();
const GetVeterinarios = require("../controllers/GetVeterinarios.js");


router.get("/", GetVeterinarios);

module.exports = router;
