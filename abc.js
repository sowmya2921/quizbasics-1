var products = require('./products')
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017', function(err,con){
    var db = con.db('kh2')
    db.collection('products').insertMany(products)
    .then((res)=>{console.log(res)})
    .catch(err=>console.log(err))

})