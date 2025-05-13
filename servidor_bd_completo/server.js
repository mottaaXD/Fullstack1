// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://motta:Fullstack2025@cluster0.rv6nm6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("bd_completo");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.redirect("usuarios/cadastro.html");
});

/////////////////////////////////////////////////////////////////////////
// Usuários

app.post("/cadastrar_usuario", function(req, resp) {

    let data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    // salva dados no banco
    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario.ejs', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });

});


app.post("/logar_usuario", function(req, resp) {

    let data = {db_login: req.body.login, db_senha: req.body.senha };

    // busca um usuário no banco de dados
    usuarios.find(data).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao logar usuário!"})
        }else {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário logado com sucesso!"})        
        };
      });

});


app.get("/listar_usuarios", function(req, resp) {

    // busca todos os usuarios no banco de dados
    usuarios.find().toArray(function(err, items) {
        // renderiza a resposta para o navegador
        resp.render("lista_usuarios.ejs", { usuarios: items });
      });

});


app.post("/atualizar_usuario", function(req, resp) {

    let data = { db_login: req.body.login, db_senha: req.body.senha };
    let newData = { $set: {db_senha: req.body.novasenha} };

    // atualiza senha do usuário
    usuarios.updateOne(data, newData, function (err, result) {
          console.log(result);
          if (result.modifiedCount == 0) {
            resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
          }else if (err) {
            resp.render('resposta_usuario.ejs', {resposta: "Erro ao atualizar usuário!"})
          }else {
            resp.render('resposta_usuario.ejs', {resposta: "Usuário atualizado com sucesso!"})        
          };
    });

});


app.post("/remover_usuario", function(req, resp) {

    let data = { db_login: req.body.login, db_senha: req.body.senha };

    // remove do usuário
    usuarios.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao remover usuário!"})
        }else {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário removido com sucesso!"})        
        };
      });
});
