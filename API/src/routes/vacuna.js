const express = require("express");
const router = express.Router();
const GetVacunas = require("../controllers/GetVacunas.js");
const PostVacuna = require("../controllers/PostVacuna.js");

router.get("/:idMascota", GetVacunas);
router.post("/", PostVacuna);

module.exports = router;
