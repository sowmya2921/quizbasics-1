var express = require('express')
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')
var productRouter = require("./product/products.router")
var quizRouter = require("./quiz.router")
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname+"/public"))

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