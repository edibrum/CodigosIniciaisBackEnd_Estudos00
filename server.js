////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const dados = require('./db.json');

// app.get('/', function(req, res){
//     res.send(dados);
// })

// app.listen(3000, function(){
//     console.log('Servidor Online');
// })
///////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.get('/', function(req, res){
//     const dados = fs.readFileSync('./db.json');
//     res.send(JSON.parse(dados));
// })

// app.listen(3000, function(){
//     console.log('Servidor Online');
// })
//////////////////////////////////////////////////
const express = require('express');
const app = express();
const fs = require('fs');
let dados = [];

function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'));
}
//receber todos os usuarios
app.get('/users', function(req, res){
    getDados();
    res.send(dados);
})
//receber somente usuario com um id específico
app.get('/users/:id', function(req, res){
    getDados();
    const id = req.params.id;
    const usuario = dados.filter(function(item){
        return item.id == id
    })
    res.send(usuario);
})

app.listen(3000, function(){
    console.log('Servidor Online');
})