const express = require("express");
const router = express.Router();
const GetHistoriaClinica = require("../controllers/GetHistoriaClinica.js");
const PostHistoriaClinica= require("../controllers/PostHistoriaClinica.js")

router.get("/:idMascota", GetHistoriaClinica);
router.post("/", PostHistoriaClinica)

module.exports = router;