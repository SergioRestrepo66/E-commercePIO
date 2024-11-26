const express = require('express')
const router = express.Router()
const controladorProducto = require('../controladores/controladorProducto')

router.post('/', controladorProducto.crearProducto); //Post significa crear objeto
router.get('/', controladorProducto.obtenerProductos); //Get significa obtener objeto
router.put('/:id', controladorProducto.actualizarProducto); //Put significa actualizar objeto
router.delete('/:id', controladorProducto.eliminarProducto); //Delete significa eliminar objeto

module.exports = router