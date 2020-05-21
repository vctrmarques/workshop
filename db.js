var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('vctmarques:pintado05@kamino.mongodb.umbler.com:44252/workshp')
 .then(conn => global.conn = conn)
 .catch(err => console.log(err))

 function findAll(callback){
    global.conn.collection('customers').find({}).toArray(callback);
   }

module.exports = { findAll }