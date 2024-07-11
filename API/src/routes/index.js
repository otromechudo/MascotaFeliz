const { Router } = require('express');
const veterinario = require("./veterinario")
const familia = require("./familia")
const cliente= require("./cliente")
const historiaClinica= require("./historiaClinica")
const mascota= require("./mascota")
const peso= require("./peso")
const vacuna= require("./vacuna")

const router = Router();
router.use('/veterinarios', veterinario )
router.use('/familia', familia )
router.use('/cliente', cliente )
router.use('/historiaclinica', historiaClinica )
router.use('/mascota', mascota )
router.use('/peso', peso )
router.use('/vacuna', vacuna )

module.exports = router;
