const express = require('express');
const router = express.Router();
const controladorOrden = require('../controladores/controladorOrden');


router.post('/:usuarioId/crear', controladorOrden.crearOrdenDesdeCarrito); //Post significa crear objeto
router.get('/:usuarioId/orden/:ordenId', controladorOrden.obtenerOrden); //Get significa obtener objeto


module.exports = router;