const express = require('express');

const app = express();

const PORT = 8081;

app.listen(8081, ()=>{
    console.log(`O servidor de pedidos está rodando na porta ${PORT} `);   
});