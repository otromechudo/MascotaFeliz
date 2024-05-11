const { Router } = require('express');
const veterinario = require("./veterinario")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/veterinarios', veterinario )





module.exports = router;
