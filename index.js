const express = require("express");
const {engine} = require("express-handlebars")
const app = express();
const bodyParser = require('body-parser')
const Sequelize  = require("sequelize");
const Post = require('./modelos/Post')



//config
    //template engine
    app.engine("handlebars", engine({defaultLayout: 'main'}))
    app.set("view engine", "handlebars")
    app.set("views", "./views")
    app.use('/public', express.static('public'));

    //body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //conexão com mysql
    const sequelize = new Sequelize ('heroku_d04059a677b6d56',   'b51502a7faf26a', '27699f73', {
        host : "us-cdbr-east-05.cleardb.net",
        dialect: 'mysql'
    })

//rotas
    app.get('', function(req, res){
        res.render('cadastro')
    })
    app.post('/save', function(req, res){
        Post.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })
    })
    


app.listen(8081, function(){
    console.log("servidor rodando localhost:8081")
});
//localhost:8081

