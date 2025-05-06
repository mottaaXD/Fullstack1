require("colors");
var http = require('http');
var express = require('express');
let bodyParser = require("body-parser");

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://motta:Fullstack2025@cluster0.rv6nm6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("AulaBD");
var usuarios = dbo.collection("usuarios")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');



var server = http.createServer(app);


server.listen(80);

console.log("Servidor rodando...".rainbow);




// Métodos

app.get("/", function(requisicao, resposta){
    resposta.redirect("LAB_01/projects.html");

})



app.post('/cadastra', function(requisicao, resposta){
    resposta.redirect("LAB_01/GET_POST_TEMPLATE/cadastro.html");
})

app.post('/login', function(requisicao, resposta){
    resposta.redirect("LAB_01/GET_POST_TEMPLATE/login.html");
})
