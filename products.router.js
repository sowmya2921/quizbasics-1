var express = require('express')
const MongoClient = require('mongodb').MongoClient
var router = express.Router()
const {ObjectId} = require('mongodb')

router.post("/addProducts",function(req,res){
    console.log("new prod:",req.body);
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err
      const db = client.db('kh2')
      db.collection('products').insertOne(req.body,function(err,data){
        res.send(data)
      })
    })
  })

  router.get("/getAllProducts",function(req,res){
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

  router.get('/getProductDetails/:id',function(req,res){
    console.log(req.params)
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
  
  router.delete("/deleteProduct/:id",function(req,res){
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

  module.exports=router;