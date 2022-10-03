var express = require('express')
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')
var productRouter = require("./product/products.router")
var quizRouter = require("./quiz.router")
var users = require('./users')
var jwt = require ('jsonwebtoken');
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname+"/public"))

app.post("/login",function(req,res){
    var x = users.find((users)=>users.password===req.body.password && users.username===req.body.username)  
    if(x){
        var token = jwt.sign(x,"sowmya29")
        res.send({token:token})
    }
    else{
        res.send({message:"invalid credentials"})
    }
})

app.use(function(req,res,next){
    console.log("middleware called")
    next()
})

function productMiddleware(req,res,next){
    console.log("product middleware called")
    next()
}

app.use("/product",productMiddleware,productRouter)
app.use("/quiz",function(req,res,next){
    console.log("quiz middleware called")
    next()
},quizRouter)

app.listen(4500,()=>{console.log("server is running on 4500")})