var express = require('express')
const MongoClient = require('mongodb').MongoClient
var cors = require('cors')
var bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/questions',function(req,res){
    MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
        if(err) throw err
        const db = client.db('kh2')
        db.collection('questions').find().toArray((err,result)=>{
            if(err) throw err
            res.send(result)
        })
    })
})


app.post("/addProducts",function(req,res){
    console.log("new prod:",req.body);
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err
      const db = client.db('kh2')
      db.collection('products').insertOne(req.body,function(err,data){
        res.send(data)
      })
    })
  })

  app.get("/getAllProducts",function(req,res){
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err
      const db = client.db('kh2')
      db.collection('products').find().toArray()
      .then(function(data){
        res.send(data)
      })
      .catch(err=>console.log('err',err))
    })
  })

  app.get('/getProductDetails/id',function(req,res){
    console/log(req.params)
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err
      const db = client.db('kh2')
      db.collection('products').find({_id:ObjectId(req.params.id)}).toArray()
      .then(function(data){
        res.send({product:data[0]})
      })
      .catch(err=>console.log('err',err))
    })
  })

  app.delete('/deleteProduct/:id',function(req,res){
    console.log(req.params)
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err
      const db = client.db('kh2')
      db.collection('products').deleteOne({_id:ObjectId(req.params.id)})
      .then(function(data){
        res.send({product:data[0]})
      })
      .catch(err=>console.log('err',err))
    })
  })


  app.listen(4500,()=>{console.log("server is running on 4500")})
