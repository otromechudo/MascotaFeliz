const express = require("express");
const router = express.Router();
const GetFamilia = require("../controllers/GetFamilia.js");
const PostFamilia= require("../controllers/PostFamilia.js")
const GetFamiliaByVeterinario = require("../controllers/GetFamiliaByVeterinario.js")

router.get("/:idFamilia", GetFamilia);
router.get("/veterinario/:idVeterinario",GetFamiliaByVeterinario)
router.post("/", PostFamilia)


module.exports = router;
