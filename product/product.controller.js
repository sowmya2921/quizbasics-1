const MongoClient = require('mongodb').MongoClient
const {ObjectId} = require('mongodb')

module.exports = {
    addProduct:function(req,res){
        console.log("new prod:",req.body);
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
          if (err) throw err
          const db = client.db('kh2')
          db.collection('products').insertOne(req.body,function(err,data){
            res.send(data)
          })
        })
      },

    getAllProducts:function(req,res){
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
          if (err) throw err
          const db = client.db('kh2')
          db.collection('products').find().toArray()
          .then(function(data){
            res.send(data)
          })
          .catch(err=>console.log('err',err))
        })
      },

    getProductDetailsById:function(req,res){
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
      },

    deleteProduct:function(req,res){
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
      },

    searchProducts:function(req,res){
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
            if (err) throw err
            const db = client.db('kh2')
            db.collection('products').find().toArray()
            .then(function(data){
                var filteredProducts = data.filter((product)=>{
                    var productString = JSON.stringify(product).toUpperCase()
                    return productString.includes(req.params.skey.toUpperCase())
                })
              res.send({filteredProducts})
            })
            .catch(err=>console.log('err',err))
          })
    }
}