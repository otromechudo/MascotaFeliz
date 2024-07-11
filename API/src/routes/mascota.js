const express = require("express");
const router = express.Router();
const GetMascotas = require("../controllers/GetMascotas.js");
const PostMascota= require("../controllers/PostMascota.js");
const GetMascota = require("../controllers/GetMascota.js")
const { route } = require("./veterinario.js");

router.get("/familia/:idFamilia", GetMascotas);
router.get("/:idMascota", GetMascota)
router.post("/", PostMascota)


module.exports = router;