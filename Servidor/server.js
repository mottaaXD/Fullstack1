require("colors");
var http = require('http');
var express = require('express');
let bodyParser = require("body-parser")


var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');


var server = http.createServer(app);


server.listen(80);

console.log("Servidor rodando...".rainbow);




// Métodos

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB_01/index.html")

})

app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB_01/index.html")

})


app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.Nome
    let login = requisicao.body.login
    let senha = requisicao.body.Senha
    let nasc = requisicao.body.Nascimento

    console.log(nome, login, senha, nasc)



    resposta.render("resposta", {nome, login, senha, nasc})
})

app.get("/for_ejs", function(requisicao, resposta){
    let valor = requisicao.query.valor
    resposta.render("exemplo_for",{valor})

})
