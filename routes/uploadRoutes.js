const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const controller = require('../controllers/uploadController');

router.post('/', upload.single('foto'), controller.enviar);

module.exports = router;
