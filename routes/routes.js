const express = require('express');
const router = express.Router();
const path = require('path');

//rutas
router.get('/index', (req,res)=>{
    res.sendFile(path.join(__dirname + '../public', 'index.html'));
});

router.get('/index', (req,res)=>{
    res.sendFile(path.join(__dirname + '../public', 'Qrs.html'));
});

module.exports = router;