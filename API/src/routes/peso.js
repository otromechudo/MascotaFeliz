const express = require("express");
const router = express.Router();
const GetPeso = require("../controllers/GetPeso.js");
const PostPeso= require("../controllers/PostPeso.js")

router.get("/:idMascota", GetPeso);
router.post("/", PostPeso)


module.exports = router;