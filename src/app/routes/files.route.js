const express = require('express');
const router = express.Router();
const { upload, afterUpload } = require('../middleware/multerConfig.middleware')
const { uploadFile, getFile } = require('../controller/Files.controller');

// POST
router.post('/atendimentos/v1/cliente/:id_cliente/upload-arquivo',[
    upload.single('file'),
    afterUpload], 
    uploadFile);

// GET
router.get('/atendimentos/v1/cliente/:id_cliente/download-arquivo/:file_name', getFile);


module.exports = router;