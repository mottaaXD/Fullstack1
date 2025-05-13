require("colors");
var http = require('http');
var express = require('express');
let bodyParser = require("body-parser");

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://motta:Fullstack2025@cluster0.rv6nm6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("labBD");
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

app.post('/cadastrar', function(requisicao, resposta){
    let usuario = requisicao.body.usuario;
    let senha = requisicao.body.senha;

    console.log(usuario, senha);

    var data = {db_usuario: usuario, db_senha: senha}

    usuarios.insertOne(data, function(err){
        if (err){
            resposta.render("resposta.ejs", {status: "Erro", usuario, senha})
        }
        else{
            resposta.render("resposta.ejs", {status: "Sucesso", usuario, senha})
        }
    })


})

app.post('/logar', function(requisicao, resposta){
    let usuario = requisicao.body.usuario;
    let senha = requisicao.body.senha;

    console.log(usuario, senha);

    var data = {db_usuario: usuario, db_senha: senha}

    usuarios.find(data).toArray(function(err, items){
        if(items.length == 0){
            resposta.render("resposta_login.ejs", {status: "usuario/senha nao encontrado!"})
        }
        else if(err){
            resposta.render("resposta_login.ejs", {status: "ERRO AO LOGAR"})
        }
        else{
            resposta.render("resposta_login.ejs", {status: "usuario "+usuario+" logado"})
        }
    })
   
})

app.post('/redirectBlog', function(requisicao, resposta){
    resposta.redirect("LAB_01/Blog/cadastrar_blog.html")
})

app.get('/blog', function(requisicao, resposta){
    resposta.render("blog.ejs")
})

