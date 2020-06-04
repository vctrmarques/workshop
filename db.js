var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('vctmarques:pintado05@kamino.mongodb.umbler.com:44252/workshop')
   .then(conn => global.conn = conn)
   .catch(err => console.log(err))

function findAll(callback) {
   global.conn.collection('customers').find({}).toArray(callback);
}

function insert(customer, callback) {
   global.conn.collection('customers').insert(customer, callback);
}

function deleteOne(id, callback) {
   global.conn.collection('customers').deleteOne({ _id: new ObjectId(id) },
      callback);
}

module.exports = { findAll, insert, deleteOne }