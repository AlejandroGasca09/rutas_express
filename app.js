const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/routes');
const app = express();
const port = 3026;

app.use(express.static('public'));

app.use('/', pageRoutes);

app.get('/', (req,res)=>{
    res.redirect('/index')
});

//servidor
app.listen(port,()=>{
    console.log(`el servidor esta activo en: http://localhost:${port}`);
});