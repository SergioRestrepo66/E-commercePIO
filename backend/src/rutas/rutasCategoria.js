const express = require('express');
const router = express.Router();
const controladorCategoria = require('../controladores/controladorCategoria');

router.post('/', controladorCategoria.crearCategoria); //Post significa crear objeto
router.get('/', controladorCategoria.obtenerCategorias); //Get significa obtener objeto
router.put('/:id', controladorCategoria.actualizarCategoria); //Put significa actualizar objeto
router.delete('/:id', controladorCategoria.eliminarCategoria); //Delete significa eliminar objeto

module.exports = router;