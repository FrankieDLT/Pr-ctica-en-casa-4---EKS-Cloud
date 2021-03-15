const express = require('express');
const router = express.Router();

// Importar funcionamientos de endpoints
const infoController = require('./../src/controllers/info.controllers');
const messageController = require('../src/controllers/message.controller');

// path con ruta de los endpoint
router.get('/',infoController.Index);
router.get('/revisasivivo',messageController.revisasivivo);

module.exports = router;